/**
 * CELSON CRO — Conversion Rate Optimization
 * Floating dual CTA bar, trust signals, contact form UX
 * Version: 2026-06-14
 */
(function () {
  'use strict';

  // ========== CONFIG ==========
  var WHATSAPP_NUMBER = '+8613825578911';
  var MESSAGE_EN = encodeURIComponent('Hello CELSON, I am interested in your building materials. Please send me more information.');
  var MESSAGE_FR = encodeURIComponent("Bonjour CELSON, je suis int\u00e9ress\u00e9(e) par vos mat\u00e9riaux de construction. Pouvez-vous me donner plus d'informations ?");

  // ========== DETECT FRENCH ==========
  function isFrench() {
    var c = document.cookie.match(/celson_lang=(\w+)/);
    if (c) return c[1] === 'fr';
    return (new URLSearchParams(window.location.search)).get('lang') === 'fr';
  }

  // ========== 1. FLOATING CTA BAR (Mobile Bottom + Desktop Side) ==========
  function buildFloatingCTA() {
    var bar = document.createElement('div');
    bar.id = 'cro-floating-bar';
    bar.setAttribute('aria-label', 'Quick contact options');

    var waUrl = isFrench()
      ? 'https://wa.me/' + WHATSAPP_NUMBER.replace(/\+/g, '') + '?text=' + MESSAGE_FR
      : 'https://wa.me/' + WHATSAPP_NUMBER.replace(/\+/g, '') + '?text=' + MESSAGE_EN;

    bar.innerHTML =
      '<div class="cro-bar-inner">' +
        // Trust badge
        '<div class="cro-trust-badge">' +
          '<span class="cro-dot"></span>' +
          '<span class="cro-trust-text">24h Response</span>' +
        '</div>' +
        // Dual CTAs
        '<div class="cro-cta-group">' +
          '<a href="' + waUrl + '" class="cro-btn cro-btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>' +
            '<span>WhatsApp</span>' +
          '</a>' +
          '<a href="contact.html" class="cro-btn cro-btn-quote" aria-label="Request a quote">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' +
            '<span>Get Quote</span>' +
          '</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(bar);

    // Sync language
    window.addEventListener('langChanged', function () {
      var waBtn = document.querySelector('.cro-btn-wa');
      if (waBtn) waBtn.href = isFrench()
        ? 'https://wa.me/' + WHATSAPP_NUMBER.replace(/\+/g, '') + '?text=' + MESSAGE_FR
        : 'https://wa.me/' + WHATSAPP_NUMBER.replace(/\+/g, '') + '?text=' + MESSAGE_EN;
    });
  }

  // ========== 2. TRUST SIGNAL STRIP (below hero on key pages) ==========
  function buildTrustStrip() {
    // Only insert on pages with a hero section
    var hero = document.querySelector('.hero-section, .page-hero, .hero-carousel');
    if (!hero) return;

    var strip = document.createElement('div');
    strip.className = 'cro-trust-strip';
    strip.innerHTML =
      '<div class="container">' +
        '<div class="cro-strip-items">' +
          '<div class="cro-strip-item">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' +
            '<span>24h Quote Response</span>' +
          '</div>' +
          '<div class="cro-strip-item">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' +
            '<span>Factory-Direct Pricing</span>' +
          '</div>' +
          '<div class="cro-strip-item">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
            '<span>98 Countries Served</span>' +
          '</div>' +
          '<div class="cro-strip-item">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>' +
            '<span>ISO 9001 Certified</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    hero.parentNode.insertBefore(strip, hero.nextSibling);
  }

  // ========== 3. CONTACT FORM ENHANCEMENT ==========
  function enhanceContactForm() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
      // Skip non-contact forms
      if (!form.querySelector('input[type="text"], input[type="email"], textarea')) return;

      // Add loading state on submit
      form.addEventListener('submit', function (e) {
        var btn = form.querySelector('button[type="submit"], input[type="submit"]');
        if (btn && !btn.disabled) {
          var originalText = btn.textContent || btn.value;
          btn.disabled = true;
          btn.setAttribute('data-original-text', originalText);
          btn.innerHTML = '<span class="cro-spinner"></span> Sending...';
          btn.classList.add('cro-btn-loading');

          // Re-enable after 30s timeout
          setTimeout(function () {
            if (btn.disabled) {
              btn.disabled = false;
              btn.textContent = originalText;
              btn.classList.remove('cro-btn-loading');
            }
          }, 30000);
        }
      });

      // Real-time validation styling
      var inputs = form.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(function (input) {
        input.addEventListener('blur', function () {
          if (input.value.trim()) {
            input.classList.add('cro-valid');
            input.classList.remove('cro-invalid');
          } else {
            input.classList.add('cro-invalid');
            input.classList.remove('cro-valid');
          }
        });
        input.addEventListener('input', function () {
          if (input.classList.contains('cro-invalid') && input.value.trim()) {
            input.classList.remove('cro-invalid');
            input.classList.add('cro-valid');
          }
        });
      });
    });
  }

  // ========== 4. SCROLL-BASED CTA VISIBILITY ==========
  function setupScrollCTA() {
    var bar = document.getElementById('cro-floating-bar');
    if (!bar) return;

    var lastScroll = 0;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var currentScroll = window.pageYOffset;
          if (currentScroll > 300 && currentScroll > lastScroll) {
            // Scrolling down — show compact
            bar.classList.add('cro-bar-compact');
          } else if (currentScroll < lastScroll) {
            // Scrolling up — show full
            bar.classList.remove('cro-bar-compact');
          }
          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ========== INIT ==========
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    buildFloatingCTA();
    buildTrustStrip();
    enhanceContactForm();
    setupScrollCTA();
    injectStyles();
  }

  // ========== STYLES ==========
  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = [
      // Floating CTA Bar
      '#cro-floating-bar {',
        'position: fixed; bottom: 0; left: 0; right: 0; z-index: 9998;',
        'background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(12px);',
        '-webkit-backdrop-filter: blur(12px);',
        'border-top: 1px solid rgba(255,255,255,0.08);',
        'padding: 10px 16px; padding-bottom: max(10px, env(safe-area-inset-bottom));',
        'transform: translateY(0); transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);',
      '}',
      '.cro-bar-compact { transform: translateY(calc(100% - 8px)) !important; }',
      '.cro-bar-inner {',
        'max-width: 680px; margin: 0 auto;',
        'display: flex; align-items: center; justify-content: space-between; gap: 12px;',
      '}',
      // Trust badge
      '.cro-trust-badge {',
        'display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.7);',
        'font-size: 12px; font-weight: 500; white-space: nowrap;',
      '}',
      '.cro-dot {',
        'width: 8px; height: 8px; border-radius: 50%;',
        'background: #22c55e;',
        'animation: croDotPulse 2s ease-in-out infinite;',
        'box-shadow: 0 0 6px rgba(34,197,94,0.6);',
      '}',
      '@keyframes croDotPulse {',
        '0%, 100% { opacity: 1; transform: scale(1); }',
        '50% { opacity: 0.5; transform: scale(1.3); }',
      '}',
      '.cro-trust-text { opacity: 0.8; }',
      // CTA group
      '.cro-cta-group { display: flex; gap: 8px; align-items: center; }',
      '.cro-btn {',
        'display: inline-flex; align-items: center; gap: 6px;',
        'padding: 10px 16px; border-radius: 100px;',
        'font-size: 14px; font-weight: 600; text-decoration: none;',
        'transition: all 0.2s cubic-bezier(0.25,1,0.5,1);',
        'white-space: nowrap;',
      '}',
      '.cro-btn-wa {',
        'background: #25D366; color: #fff;',
        'box-shadow: 0 2px 12px rgba(37,211,102,0.35);',
      '}',
      '.cro-btn-wa:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(37,211,102,0.45); }',
      '.cro-btn-wa:active { transform: translateY(0); }',
      '.cro-btn-quote {',
        'background: #15803D; color: #fff;',
        'box-shadow: 0 2px 12px rgba(21,128,61,0.35);',
      '}',
      '.cro-btn-quote:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(21,128,61,0.45); }',
      '.cro-btn-quote:active { transform: translateY(0); }',
      // Trust strip
      '.cro-trust-strip {',
        'background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);',
        'border-bottom: 1px solid rgba(255,255,255,0.06);',
        'padding: 12px 0; overflow: hidden;',
      '}',
      '.cro-strip-items {',
        'display: flex; justify-content: center; gap: 32px; flex-wrap: wrap;',
      '}',
      '.cro-strip-item {',
        'display: flex; align-items: center; gap: 6px;',
        'color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500;',
      '}',
      '.cro-strip-item svg { opacity: 0.6; flex-shrink: 0; }',
      // Form enhancement
      '.cro-btn-loading { cursor: wait; opacity: 0.8; }',
      '.cro-invalid { border-color: #ef4444 !important; box-shadow: 0 0 0 3px rgba(239,68,68,0.1) !important; }',
      '.cro-valid { border-color: #22c55e !important; box-shadow: 0 0 0 3px rgba(34,197,94,0.1) !important; }',
      // Spinner
      '.cro-spinner {',
        'display: inline-block; width: 16px; height: 16px;',
        'border: 2px solid rgba(255,255,255,0.3);',
        'border-top-color: #fff; border-radius: 50%;',
        'animation: croSpin 0.6s linear infinite;',
        'vertical-align: middle; margin-right: 4px;',
      '}',
      '@keyframes croSpin { to { transform: rotate(360deg); } }',
      // Desktop — transform to side panel
      '@media (min-width: 769px) {',
        '#cro-floating-bar {',
          'bottom: auto; top: 50%; right: 0; left: auto;',
          'transform: translateY(-50%);',
          'background: rgba(15, 23, 42, 0.92);',
          'border-top: none; border-left: 1px solid rgba(255,255,255,0.08);',
          'border-radius: 16px 0 0 16px;',
          'padding: 20px 12px; width: auto;',
        '}',
        '.cro-bar-inner {',
          'flex-direction: column; gap: 16px; max-width: none;',
        '}',
        '.cro-trust-badge {',
          'flex-direction: column; gap: 6px; text-align: center;',
          'font-size: 11px;',
        '}',
        '.cro-cta-group { flex-direction: column; gap: 8px; }',
        '.cro-btn { padding: 10px 14px; font-size: 13px; flex-direction: column; gap: 4px; }',
        '.cro-btn svg { width: 22px; height: 22px; }',
        '.cro-bar-compact { transform: translateY(-50%) translateX(calc(100% - 28px)) !important; }',
        '#wa-floating-wrapper { display: none; }', // Hide old WA button
        '.cro-strip-items { gap: 48px; }',
        '.cro-strip-item { font-size: 14px; }',
      '}',
      '@media (max-width: 768px) {',
        '#wa-floating-wrapper { display: none; }', // Hide old WA button on mobile
        '.cro-trust-badge { font-size: 11px; }',
        '.cro-btn { padding: 8px 14px; font-size: 13px; }',
        '.cro-strip-items { gap: 16px; }',
        '.cro-strip-item { font-size: 11px; }',
        '.cro-strip-item svg { width: 14px; height: 14px; }',
        // Push footer up so content isn't hidden behind bar
        'footer { padding-bottom: 70px !important; }',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }
})();
