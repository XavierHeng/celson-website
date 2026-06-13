var CACHE_NAME = 'celson-admin-v1';
var ASSETS = [
  '/admin.html',
  '/js/prices.js',
  '/js/products.js',
  '/js/i18n.js',
  '/js/lang.js',
  '/js/seo.js',
  '/js/analytics.js',
  '/js/whatsapp.js',
  '/assets/favicon.svg',
  '/assets/crown-logo-44.webp'
];

// Install — precache core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate — clean old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch — cache-first then network fallback
self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  // Skip analytics / external
  if (e.request.url.indexOf('google-analytics') !== -1) return;
  if (e.request.url.indexOf('formspree') !== -1) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) {
        // Background update
        fetch(e.request).then(function(res) {
          if (res.ok) {
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(e.request, res);
            });
          }
        }).catch(function() {});
        return cached;
      }
      return fetch(e.request).then(function(res) {
        if (!res || res.status !== 200) return res;
        var clone = res.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, clone);
        });
        return res;
      });
    })
  );
});
