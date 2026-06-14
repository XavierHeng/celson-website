/**
 * CELSON — A11y + Mobile Enhancements
 * Added via js/a11y.js | Version: 2026-06-14
 */
(function () {
  'use strict';

  // ========== 1. SKIP-TO-CONTENT LINK ==========
  function addSkipLink() {
    var link = document.createElement('a');
    link.href = '#main-content';
    link.className = 'skip-to-content';
    link.textContent = 'Skip to main content';
    link.setAttribute('aria-label', 'Skip to main content');
    document.body.insertBefore(link, document.body.firstChild);
  }

  // ========== 2. ADD ARIA LABELS TO ICON-ONLY LINKS ==========
  function enhanceAriaLabels() {
    // Social/icon links without text
    var links = document.querySelectorAll('a[href]');
    links.forEach(function (link) {
      // SVGs without text — add aria-label
      var svg = link.querySelector('svg');
      var hasText = link.textContent.trim().length > 0;
      if (svg && !hasText && !link.getAttribute('aria-label')) {
        var href = link.getAttribute('href') || '';
        if (href.includes('wa.me') || href.includes('whatsapp'))
          link.setAttribute('aria-label', 'Chat on WhatsApp');
        else if (href.includes('mailto:'))
          link.setAttribute('aria-label', 'Send email');
        else if (link.classList.contains('back-to-top'))
          link.setAttribute('aria-label', 'Back to top');
      }
    });

    // Add main-content id to main content area
    var main = document.querySelector('main') ||
               document.querySelector('.hero-section') ||
               document.querySelector('.page-hero') ||
               document.querySelector('h1')?.closest('section');
    if (main && !document.getElementById('main-content')) {
      main.id = 'main-content';
    }

    // Add role=main if missing
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
  }

  // ========== 3. ENSURE TOUCH TARGETS ≥44px ==========
  function fixTouchTargets() {
    // Small interactive elements
    var smallEls = document.querySelectorAll('a, button, [role="button"], input[type="submit"]');
    smallEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
        el.classList.add('touch-min');
      }
    });
  }

  // ========== 4. NAVIGATION MENU — CLOSE ON ESC ==========
  function enhanceNavAccessibility() {
    var nav = document.querySelector('.header-nav, nav');
    if (!nav) return;

    // Close mega menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var openMenu = document.querySelector('.mega-menu.open, .mega-menu.active, .nav-open');
        if (openMenu) {
          openMenu.classList.remove('open', 'active');
          document.body.classList.remove('nav-open');
        }
      }
    });
  }

  // ========== INIT ==========
  function init() {
    addSkipLink();
    enhanceAriaLabels();
    fixTouchTargets();
    enhanceNavAccessibility();
    injectStyles();
  }

  // ========== STYLES ==========
  function injectStyles() {
    var style = document.createElement('style');
    style.id = 'celson-a11y-mobile';
    style.textContent = [
      // Skip-to-content
      '.skip-to-content {',
        'position: absolute; top: -100%; left: 16px;',
        'background: #15803D; color: #fff; padding: 12px 20px;',
        'border-radius: 0 0 8px 8px; z-index: 100000;',
        'font-weight: 600; text-decoration: none;',
        'transition: top 0.2s ease;',
      '}',
      '.skip-to-content:focus { top: 0; }',
      // Touch target minimum
      '.touch-min {',
        'min-width: 44px !important; min-height: 44px !important;',
        'display: inline-flex; align-items: center; justify-content: center;',
      '}',
      // Enhanced focus ring (not overridden by outlines)
      ':focus-visible {',
        'outline: 2px solid #15803D; outline-offset: 2px;',
      '}',
      // Reduced motion support
      '@media (prefers-reduced-motion: reduce) {',
        '*, *::before, *::after {',
          'animation-duration: 0.01ms !important;',
          'animation-iteration-count: 1 !important;',
          'transition-duration: 0.01ms !important;',
          'scroll-behavior: auto !important;',
        '}',
      '}',
      // Mobile: remove tap highlight
      '@media (max-width: 768px) {',
        'a, button, [role="button"] {',
          '-webkit-tap-highlight-color: transparent;',
        '}',
      '}',
      // Mobile: safe area for notched phones
      '@supports (padding: env(safe-area-inset-bottom)) {',
        'body {',
          'padding-bottom: env(safe-area-inset-bottom);',
        '}',
        '.site-header {',
          'padding-top: env(safe-area-inset-top);',
        '}',
      '}',
      // High contrast mode
      '@media (forced-colors: active) {',
        '.cro-btn, .cta-btn, button {',
          'border: 2px solid ButtonText;',
        '}',
      '}',
      // Mobile font scaling for readability
      '@media (max-width: 480px) {',
        'body { -webkit-text-size-adjust: 100%; }',
        'h1 { font-size: clamp(24px, 6vw, 36px) !important; }',
        'h2 { font-size: clamp(20px, 5vw, 28px) !important; }',
        '.hero-section h1, .page-hero h1 { font-size: clamp(26px, 7vw, 42px) !important; }',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
