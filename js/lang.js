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

    // Update the language toggle button
    updateLangButton();

    // Update <html lang> attribute
    document.documentElement.setAttribute('lang', I18N.lang);
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

  // Toggle language
  function toggleLang() {
    I18N.lang = (I18N.lang === 'en') ? 'fr' : 'en';
    try { localStorage.setItem('celson_lang', I18N.lang); } catch(e) {}
    applyTranslations();
  }

  // Handle click on language switch buttons
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.lang-switch');
    if (btn) {
      e.preventDefault();
      toggleLang();
    }
  });

  // Apply on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
