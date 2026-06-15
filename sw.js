/* CELSON Service Worker — v2.0
   Strategy: Stale-while-revalidate for content, Cache-first for static assets
   Offline: branded fallback page
*/

var CACHE_STATIC  = 'celson-static-v2';
var CACHE_PAGES   = 'celson-pages-v2';
var CACHE_IMAGES  = 'celson-images-v2';
var CACHE_EXTERNAL = 'celson-external-v2';
var OFFLINE_PAGE  = '/offline.html';

// ── Pre-cache critical resources ──────────────────────────
var PRECACHE = [
  '/',
  '/index.html',
  '/products.html',
  '/about.html',
  '/contact.html',
  '/projects.html',
  '/shop.html',
  '/offline.html',
  '/css/style.css',
  '/css/mobile.css',
  '/css/skeleton.css',
  '/js/main.js',
  '/js/mobile.js',
  '/js/i18n.js',
  '/js/lang.js',
  '/js/seo.js',
  '/js/skeleton.js',
  '/assets/favicon.svg',
  '/assets/pwa/icon-192.png',
  '/assets/pwa/icon-512.png'
];

// ── Install ──────────────────────────────────────────────
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_STATIC).then(function(cache) {
      return Promise.allSettled(
        PRECACHE.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn('[SW] Precache failed: ' + url, err);
          });
        })
      );
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── Activate — purge old caches ──────────────────────────
self.addEventListener('activate', function(e) {
  var validCaches = [CACHE_STATIC, CACHE_PAGES, CACHE_IMAGES, CACHE_EXTERNAL];
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return validCaches.indexOf(k) === -1; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── Fetch ────────────────────────────────────────────────
self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;

  var url = new URL(e.request.url);
  var path = url.pathname;

  // Skip analytics / external tracking
  if (/google-analytics|googletagmanager|formspree|gtag/.test(url.host)) return;

  // ── Navigation requests → network first, offline fallback ──
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request).then(function(cached) {
          return cached || caches.match(OFFLINE_PAGE);
        });
      })
    );
    return;
  }

  // ── HTML pages → stale-while-revalidate ──
  if (path.endsWith('.html') || path === '/' || !path.match(/\.\w{2,5}$/)) {
    e.respondWith(staleWhileRevalidate(e.request, CACHE_PAGES));
    return;
  }

  // ── Static assets (CSS/JS/Fonts) → cache first ──
  if (/\.(css|js|woff2?|ttf|svg)$/.test(path)) {
    e.respondWith(cacheFirst(e.request, CACHE_STATIC));
    return;
  }

  // ── Images → stale-while-revalidate ──
  if (/\.(png|jpe?g|webp|gif|ico)$/.test(path)) {
    e.respondWith(staleWhileRevalidate(e.request, CACHE_IMAGES));
    return;
  }

  // ── Google Fonts CSS → network first, cache on success ──
  if (/fonts\.googleapis\.com/.test(url.host)) {
    e.respondWith(networkFirst(e.request, CACHE_EXTERNAL));
    return;
  }

  // ── Default → network with cache fallback ──
  e.respondWith(
    fetch(e.request).then(function(res) {
      if (res.ok) {
        var clone = res.clone();
        caches.open(CACHE_PAGES).then(function(c) { c.put(e.request, clone); });
      }
      return res;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});

// ── Strategies ───────────────────────────────────────────

function staleWhileRevalidate(request, cacheName) {
  return caches.match(request).then(function(cached) {
    var fetchPromise = fetch(request).then(function(res) {
      if (res.ok) {
        var clone = res.clone();
        caches.open(cacheName).then(function(c) { c.put(request, clone); });
      }
      return res;
    }).catch(function() {});
    return cached || fetchPromise;
  });
}

function cacheFirst(request, cacheName) {
  return caches.match(request).then(function(cached) {
    if (cached) {
      // Background refresh
      fetch(request).then(function(res) {
        if (res.ok) caches.open(cacheName).then(function(c) { c.put(request, res); });
      }).catch(function() {});
      return cached;
    }
    return fetch(request).then(function(res) {
      if (res.ok) {
        var clone = res.clone();
        caches.open(cacheName).then(function(c) { c.put(request, clone); });
      }
      return res;
    });
  });
}

function networkFirst(request, cacheName) {
  return fetch(request).then(function(res) {
    if (res.ok) {
      var clone = res.clone();
      caches.open(cacheName).then(function(c) { c.put(request, clone); });
    }
    return res;
  }).catch(function() {
    return caches.match(request);
  });
}
