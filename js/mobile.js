/* ============================================
   CELSON — Mobile JavaScript Enhancements
   Fixes: viewport height, orientation, touch,
   safe areas, double-tap, scroll performance
   ============================================ */

(function () {
  'use strict';

  // ─── 1. FIX 100vh ON MOBILE (iOS Safari) ───
  function setViewportHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }
  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', function () {
    // Delay slightly for orientation to settle
    setTimeout(setViewportHeight, 100);
  });

  // Also listen for visualViewport changes (keyboard open/close on mobile)
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setViewportHeight);
  }

  // ─── 2. TOUCH DEVICE DETECTION ───
  var isTouchDevice = ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0);

  if (isTouchDevice) {
    document.documentElement.classList.add('is-touch-device');
  }

  // ─── 3. VIEWPORT META DYNAMIC ADJUSTMENT ───
  // Some mobile browsers ignore viewport-fit=cover; ensure it's set
  (function ensureViewportFit() {
    var vp = document.querySelector('meta[name="viewport"]');
    if (vp) {
      var content = vp.getAttribute('content') || '';
      if (content.indexOf('viewport-fit=cover') === -1) {
        vp.setAttribute('content', content.replace(/\s*$/, '') + ', viewport-fit=cover');
      }
      // Ensure user-scalable is not disabled
      if (content.indexOf('user-scalable=no') !== -1) {
        vp.setAttribute('content', content.replace('user-scalable=no', 'user-scalable=yes'));
      }
    }
  })();

  // ─── 4. PREVENT ACCIDENTAL DOUBLE-TAP ZOOM ───
  // On some elements, double-tap zoom is undesirable (buttons, nav)
  if (isTouchDevice) {
    var lastTap = 0;
    var DOUBLE_TAP_THRESHOLD = 300; // ms

    document.addEventListener('touchend', function (e) {
      var target = e.target;
      // Only prevent zoom on interactive elements
      if (target.closest('button, a, .btn-primary, .btn-secondary, ' +
        '.btn-add, .btn-view-cart, .cat-pill, .subpage-nav-links a, ' +
        '.header-nav a, .cart-qty-btn, .nav-toggle, .lang-switch')) {

        var now = Date.now();
        if (now - lastTap < DOUBLE_TAP_THRESHOLD) {
          e.preventDefault();
        }
        lastTap = now;
      }
    }, { passive: false });
  }

  // ─── 5. PASSIVE SCROLL LISTENERS ───
  // Mark scroll event listeners as passive for better scroll perf
  // This is done by monkey-patching addEventListener for touch/wheel events
  (function enablePassiveListeners() {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; return true; }
      });
      window.addEventListener('testPassive', null, opts);
      window.removeEventListener('testPassive', null, opts);
    } catch (e) { /* not supported */ }

    if (supportsPassive) {
      var addEvent = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function (type, fn, opts) {
        var useOpts = opts;
        if ((type === 'touchstart' || type === 'touchmove' ||
            type === 'wheel' || type === 'mousewheel') &&
            (opts === undefined || opts === false || opts === true)) {
          useOpts = { passive: true, capture: !!opts };
        }
        addEvent.call(this, type, fn, useOpts);
      };
    }
  })();

  // ─── 6. ORIENTATION CHANGE — UPDATE STICKY ELEMENTS ───
  var orientationCleanup = null;

  function handleOrientationChange() {
    // Recalculate any position-dependent elements
    setViewportHeight();

    // Update CRO floating bar position if exists
    var croBar = document.querySelector('.cro-floating-bar');
    if (croBar) {
      croBar.style.transition = 'none';
      // Trigger reflow
      croBar.offsetHeight;
      croBar.style.transition = '';
    }

    // Refresh any fixed-position modals
    var modals = document.querySelectorAll('.cart-popup-overlay, .lightbox-overlay');
    for (var i = 0; i < modals.length; i++) {
      var m = modals[i];
      m.style.display = 'none';
      m.offsetHeight;
      m.style.display = '';
    }
  }

  window.addEventListener('orientationchange', function () {
    if (orientationCleanup) clearTimeout(orientationCleanup);
    orientationCleanup = setTimeout(handleOrientationChange, 200);
  });

  // ─── 7. SAFE AREA DYNAMIC UPDATE ───
  // Update safe area CSS variables when they change (e.g., keyboard)
  function updateSafeAreas() {
    var style = getComputedStyle(document.documentElement);
    var sat = parseInt(style.getPropertyValue('env(safe-area-inset-top)')) || 0;
    var sab = parseInt(style.getPropertyValue('env(safe-area-inset-bottom)')) || 0;
    var sal = parseInt(style.getPropertyValue('env(safe-area-inset-left)')) || 0;
    var sar = parseInt(style.getPropertyValue('env(safe-area-inset-right)')) || 0;

    document.documentElement.style.setProperty('--sat', sat + 'px');
    document.documentElement.style.setProperty('--sab', sab + 'px');
    document.documentElement.style.setProperty('--sal', sal + 'px');
    document.documentElement.style.setProperty('--sar', sar + 'px');
  }

  updateSafeAreas();
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateSafeAreas);
  }

  // ─── 8. TOUCH FEEDBACK (ripple-free active state) ───
  if (isTouchDevice) {
    // Add .touch-active class on touch, remove on release
    document.addEventListener('touchstart', function (e) {
      var interactive = e.target.closest(
        'a, button, .btn-primary, .btn-secondary, .btn-sm, ' +
        '.product-card, .bento-card, .explore-card, .shop-item, ' +
        '.cat-pill, .btn-add, .subpage-nav-links a'
      );
      if (interactive) {
        interactive.classList.add('touch-active');
      }
    }, { passive: true });

    document.addEventListener('touchend', function () {
      var actives = document.querySelectorAll('.touch-active');
      for (var i = 0; i < actives.length; i++) {
        actives[i].classList.remove('touch-active');
      }
    });

    document.addEventListener('touchcancel', function () {
      var actives = document.querySelectorAll('.touch-active');
      for (var i = 0; i < actives.length; i++) {
        actives[i].classList.remove('touch-active');
      }
    });
  }

  // ─── 9. SCROLL-LOCKED BODY WHEN MODAL OPEN ───
  // Prevent background scroll when cart/lightbox is open
  var bodyLockCount = 0;

  window.CelsonMobile = window.CelsonMobile || {};

  window.CelsonMobile.lockBodyScroll = function () {
    bodyLockCount++;
    if (bodyLockCount === 1) {
      var scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + scrollY + 'px';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.dataset.scrollY = scrollY;
    }
  };

  window.CelsonMobile.unlockBodyScroll = function () {
    bodyLockCount = Math.max(0, bodyLockCount - 1);
    if (bodyLockCount === 0) {
      var scrollY = parseInt(document.body.dataset.scrollY) || 0;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
    }
  };

  // ─── 10. CONNECTION-AWARE IMAGE LOADING ───
  // On slow connections, reduce image quality hints
  if ('connection' in navigator) {
    var conn = navigator.connection;
    if (conn) {
      function updateConnectionHint() {
        var effectiveType = conn.effectiveType || '4g';
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          document.documentElement.classList.add('slow-connection');
        } else {
          document.documentElement.classList.remove('slow-connection');
        }
      }
      updateConnectionHint();
      conn.addEventListener('change', updateConnectionHint);
    }
  }

  // ─── 11. KEYBOARD-AWARE FORM SCROLLING ───
  // Auto-scroll focused inputs into view on mobile
  if (isTouchDevice) {
    document.addEventListener('focusin', function (e) {
      var target = e.target;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        // Small delay to let keyboard open
        setTimeout(function () {
          var rect = target.getBoundingClientRect();
          // Check if element is in the bottom 40% of visual viewport
          var viewportHeight = window.visualViewport ?
            window.visualViewport.height : window.innerHeight;
          if (rect.bottom > viewportHeight * 0.6) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    });
  }

  // ─── 12. EXPORT UTILITIES ───
  window.CelsonMobile = window.CelsonMobile || {};
  window.CelsonMobile.isTouchDevice = isTouchDevice;
  window.CelsonMobile.setViewportHeight = setViewportHeight;
  window.CelsonMobile.updateSafeAreas = updateSafeAreas;

  // ─── INIT LOG ───
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[CELSON Mobile] Initialized | Touch:', isTouchDevice,
      '| Viewport:', window.innerWidth + '×' + window.innerHeight);
  }

})();
