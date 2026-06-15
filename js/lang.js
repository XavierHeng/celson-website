/**
 * CELSON i18n Runtime — Language Switcher
 * Handles EN ⇄ FR toggle, localStorage persistence, DOM updates
 */
(function() {
  'use strict';

  // Apply translations to all [data-i18n] elements
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var text = I18N.t(key);
      // Use innerHTML to preserve nested HTML (e.g., <span class="nowrap">)
      el.innerHTML = text;
    });

    // Handle data-i18n-src for images
    document.querySelectorAll('[data-i18n-src]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-src');
      var src = I18N.t(key);
      if (src && src !== key) {
        el.setAttribute('src', src);
      }
    });

    // Handle data-i18n-placeholder for inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', I18N.t(key));
    });

    // Handle data-i18n-title for hover titles
    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', I18N.t(key));
    });

    // Handle data-i18n-aria for aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', I18N.t(key));
    });

    // Handle data-i18n-alt for img alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-alt');
      el.setAttribute('alt', I18N.t(key));
    });

    // Update the language toggle button
    updateLangButton();

    // Update <html lang> attribute
    document.documentElement.setAttribute('lang', I18N.lang);

    // Update document.title dynamically
    var titleKey = document.documentElement.getAttribute('data-i18n-title-key');
    if (titleKey) {
      document.title = I18N.t(titleKey);
    }

    // Sync cookie for Cloudflare Functions routing (shop page)
    setLangCookie(I18N.lang);
  }

  // Update language toggle button text
  function updateLangButton() {
    var btns = document.querySelectorAll('.lang-switch');
    btns.forEach(function(btn) {
      if (I18N.lang === 'en') {
        btn.innerHTML = '<span class="lang-active">EN</span> <span class="lang-sep">/</span> <span class="lang-inactive">FR</span>';
      } else {
        btn.innerHTML = '<span class="lang-inactive">EN</span> <span class="lang-sep">/</span> <span class="lang-active">FR</span>';
      }
      btn.setAttribute('aria-label', I18N.lang === 'en' ? 'Switch to French' : 'Passer en anglais');
    });

    // Also update mobile toggle if exists
    var mobileBtns = document.querySelectorAll('.mobile-lang-switch');
    mobileBtns.forEach(function(btn) {
      btn.textContent = I18N.lang === 'en' ? 'FR' : 'EN';
    });
  }

  // Set cookie for server-side routing (Cloudflare Functions)
  function setLangCookie(lang) {
    // Set both localStorage and cookie so Cloudflare Functions can read it
    try { localStorage.setItem('celson_lang', lang); } catch(e) {}
    // Cookie: 1 year expiry, root path, SameSite=Lax (works with navigation)
    document.cookie = 'celson_lang=' + lang + '; path=/; max-age=31536000; SameSite=Lax';
  }

  // Toggle language
  function toggleLang() {
    I18N.lang = (I18N.lang === 'en') ? 'fr' : 'en';
    setLangCookie(I18N.lang);
    applyTranslations();

    // Shop page uses Cloudflare Function routing — reload to get correct version
    // Other pages translate in-place (data-i18n) so no reload needed
    var path = window.location.pathname;
    if (path.indexOf('shop') !== -1) {
      window.location.reload();
    }
  }

  // Handle click on language switch buttons
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.lang-switch');
    if (btn) {
      e.preventDefault();
      toggleLang();
    }
  });

  // ─── Shared isFrench() — use across all scripts ───
  window.CelsonLang = window.CelsonLang || {};
  window.CelsonLang.isFrench = function () {
    var c = document.cookie.match(/celson_lang=(\w+)/);
    if (c) return c[1] === 'fr';
    return (new URLSearchParams(window.location.search)).get('lang') === 'fr';
  };
  window.CelsonLang.getLang = function () { return I18N.lang; };

  // Apply on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
