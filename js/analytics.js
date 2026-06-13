/**
 * CELSON Google Analytics 4
 * Uncomment and set MEASUREMENT_ID after creating GA4 property:
 *   1. Go to https://analytics.google.com/
 *   2. Create account → Property → Data Stream (Web)
 *   3. Copy Measurement ID (format: G-XXXXXXXXXX)
 *   4. Set it below and uncomment the script
 *
 *   Or set the ID via `window.GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';` before this script loads.
 */
(function () {
  'use strict';

  var MEASUREMENT_ID = window.GA4_MEASUREMENT_ID || 'G-ENPG51ZYW1';

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);

  // Track contact form submissions as conversions
  window.addEventListener('load', function () {
    var contactForm = document.querySelector('form[action="https://formspree.io/f/xdavdror"]');
    if (contactForm) {
      contactForm.addEventListener('submit', function () {
        gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'contact_form'
        });
      });
    }

    // Track WhatsApp clicks as conversions
    var waBtn = document.getElementById('wa-floating-btn');
    if (waBtn) {
      waBtn.addEventListener('click', function () {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: 'whatsapp_floating'
        });
      });
    }
  });
})();
