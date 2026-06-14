/* ============================================
   CELSON — Skeleton Loading & Progressive Reveal
   ============================================ */
(function () {
  'use strict';

  // --- Config ---
  const SKELETON_FADE_MS = 400;
  const IMAGE_LOAD_TIMEOUT = 6000; // max wait for images

  // --- State ---
  let revealed = false;

  // ==========================================
  //  1. Skeleton Injection
  // ==========================================
  function injectSkeletons() {
    const targets = document.querySelectorAll('[data-skeleton]');
    if (!targets.length) return;

    targets.forEach(function (el) {
      var type = el.getAttribute('data-skeleton');
      var skeleton = buildSkeleton(type, el);
      if (skeleton) {
        el.setAttribute('data-skeleton-wrapper', '');
        el.appendChild(skeleton);
      }
    });
  }

  function buildSkeleton(type, original) {
    var skel = document.createElement('div');
    skel.className = 'skeleton-hidden';
    skel.setAttribute('aria-hidden', 'true');

    switch (type) {
      case 'hero':
        skel.className = 'skeleton-hero';
        skel.innerHTML =
          '<div class="skeleton skeleton-heading"></div>' +
          '<div class="skeleton skeleton-text skeleton-text-lg"></div>' +
          '<div class="skeleton skeleton-btn"></div>';
        break;

      case 'card':
        skel.className = 'skeleton skeleton-card';
        skel.innerHTML =
          '<div class="skeleton skeleton-image"></div>' +
          '<div class="skeleton-card-body">' +
            '<div class="skeleton skeleton-title"></div>' +
            '<div class="skeleton skeleton-text"></div>' +
            '<div class="skeleton skeleton-text skeleton-text-sm"></div>' +
          '</div>';
        break;

      case 'cards-3':
        skel.className = 'skeleton-grid skeleton-grid-3';
        skel.innerHTML =
          buildCardSkelHTML() + buildCardSkelHTML() + buildCardSkelHTML();
        break;

      case 'cards-4':
        skel.className = 'skeleton-grid skeleton-grid-4';
        skel.innerHTML =
          buildCardSkelHTML() + buildCardSkelHTML() + buildCardSkelHTML() + buildCardSkelHTML();
        break;

      case 'table':
        skel.innerHTML =
          buildTableRowHTML() + buildTableRowHTML() + buildTableRowHTML() +
          buildTableRowHTML() + buildTableRowHTML();
        break;

      case 'list':
        skel.innerHTML =
          buildItemRowHTML() + buildItemRowHTML() + buildItemRowHTML();
        break;

      case 'content':
        skel.innerHTML =
          '<div class="skeleton skeleton-heading"></div>' +
          '<div class="skeleton skeleton-text skeleton-text-lg"></div>' +
          '<div class="skeleton skeleton-text"></div>' +
          '<div class="skeleton skeleton-text skeleton-text-end"></div>';
        break;

      case 'image':
        skel.className = 'skeleton skeleton-image';
        break;

      default:
        return null;
    }

    return skel;
  }

  function buildCardSkelHTML() {
    return (
      '<div class="skeleton skeleton-card">' +
        '<div class="skeleton skeleton-image"></div>' +
        '<div class="skeleton-card-body">' +
          '<div class="skeleton skeleton-title"></div>' +
          '<div class="skeleton skeleton-text"></div>' +
          '<div class="skeleton skeleton-text skeleton-text-sm"></div>' +
        '</div>' +
      '</div>'
    );
  }

  function buildTableRowHTML() {
    return (
      '<div class="skeleton-table-row">' +
        '<div class="skeleton-table-cell"></div>' +
        '<div class="skeleton-table-cell"></div>' +
        '<div class="skeleton-table-cell"></div>' +
      '</div>'
    );
  }

  function buildItemRowHTML() {
    return (
      '<div class="skeleton-item-row">' +
        '<div class="skeleton skeleton-image"></div>' +
        '<div class="skeleton-item-info">' +
          '<div class="skeleton skeleton-title"></div>' +
          '<div class="skeleton skeleton-text skeleton-text-sm"></div>' +
        '</div>' +
      '</div>'
    );
  }

  // ==========================================
  //  2. Progressive Image Loading
  // ==========================================
  function setupLazyImages() {
    var images = document.querySelectorAll('img[loading="lazy"], img:not([loading])');
    var viewportHeight = window.innerHeight;

    images.forEach(function (img) {
      // Skip logo and already-loaded images
      if (img.hasAttribute('fetchpriority') && img.getAttribute('fetchpriority') === 'high') return;
      if (img.complete) return;

      // Check if image is above fold
      var rect = img.getBoundingClientRect();
      if (rect.top < viewportHeight * 1.5) {
        // Near or above fold — ensure it loads
        if (img.loading !== 'eager') {
          img.loading = 'eager';
        }
      } else {
        // Below fold — ensure lazy
        if (!img.hasAttribute('loading')) {
          img.loading = 'lazy';
        }
      }
    });
  }

  // ==========================================
  //  3. Content Reveal
  // ==========================================
  function revealContent() {
    if (revealed) return;
    revealed = true;

    // Remove skeleton placeholders
    var skeletons = document.querySelectorAll('.skeleton-hidden');
    skeletons.forEach(function (s) {
      s.parentNode.removeChild(s);
    });

    // Fade in real content
    var wrappers = document.querySelectorAll('[data-skeleton-wrapper]');
    wrappers.forEach(function (w) {
      w.querySelectorAll(':scope > :not(script):not(style)').forEach(function (child) {
        child.style.animation = 'skeleton-fade-in ' + SKELETON_FADE_MS + 'ms ease-out forwards';
      });
    });

    // Remove loading state
    document.body.classList.add('skeleton-ready');
    setTimeout(function () {
      document.body.classList.remove('skeleton-loading');
    }, SKELETON_FADE_MS);
  }

  function waitForCriticalImages() {
    var criticalImages = document.querySelectorAll(
      'img[fetchpriority="high"], ' +
      '[data-skeleton-wrapper] img:not([loading="lazy"])'
    );

    if (!criticalImages.length) {
      revealContent();
      return;
    }

    var loaded = 0;
    var total = criticalImages.length;
    var timeout = setTimeout(function () {
      revealContent(); // fallback: reveal even if images hang
    }, IMAGE_LOAD_TIMEOUT);

    criticalImages.forEach(function (img) {
      if (img.complete) {
        loaded++;
        if (loaded >= total) {
          clearTimeout(timeout);
          revealContent();
        }
        return;
      }

      img.addEventListener('load', function () {
        loaded++;
        if (loaded >= total) {
          clearTimeout(timeout);
          revealContent();
        }
      }, { once: true });

      img.addEventListener('error', function () {
        loaded++;
        if (loaded >= total) {
          clearTimeout(timeout);
          revealContent();
        }
      }, { once: true });
    });
  }

  // ==========================================
  //  4. Navigation Transition
  // ==========================================
  function setupPageTransitions() {
    // Add subtle exit transition when navigating away
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;

      var href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript:') ||
          href.startsWith('tel:') || href.startsWith('mailto:') || link.target === '_blank') return;

      // Internal navigation: add exit animation
      if (href.endsWith('.html') || href.endsWith('/') || href.indexOf('.') === -1) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 150ms ease-out';
        setTimeout(function () {
          window.location.href = href;
        }, 150);
      }
    });
  }

  // ==========================================
  //  5. Init
  // ==========================================
  function init() {
    // Check for splash screen — if splash is present and not done, let splash handle it
    var splash = document.getElementById('celson-splash');
    var splashDone = false;
    try { splashDone = localStorage.getItem('celson_splash_done') === '1'; } catch (e) {}

    if (!splash || splashDone) {
      // No splash or already seen — show skeletons
      document.body.classList.add('skeleton-loading');
      injectSkeletons();
      setupLazyImages();

      if (document.readyState === 'complete') {
        waitForCriticalImages();
      } else {
        window.addEventListener('load', waitForCriticalImages);
      }
    }

    setupPageTransitions();
  }

  // Run early to set loading state before render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
