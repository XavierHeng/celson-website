/**
 * CELSON Shipping Photos WhatsApp Gate
 * Extracted from index.html inline script (2026-06-15)
 */
(function() {
  'use strict';
  var gateBtn = document.getElementById('shippingGateBtn');
  var gate = document.getElementById('shippingGate');
  var preview = document.getElementById('shippingPreview');
  var content = document.getElementById('shippingContent');
  if (!gateBtn || !gate || !content) return;

  // Uses shared window.CelsonLang.isFrench()
  function isFrench() {
    return window.CelsonLang && window.CelsonLang.isFrench ? window.CelsonLang.isFrench() : false;
  }

  function setWaUrl() {
    gateBtn.href = isFrench() ? gateBtn.dataset.waFr : gateBtn.dataset.waEn;
  }
  setWaUrl();
  window.addEventListener('langChanged', setWaUrl);

  function revealGallery() {
    gate.style.display = 'none';
    if (preview) preview.style.display = 'none';
    content.style.display = 'block';
    content.classList.add('shipping-content--revealed');
    // Force all lazy-loaded images to load immediately (browsers skip lazy-load inside display:none)
    content.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
      img.loading = 'eager';
    });
    // Fallback: after a short delay, show placeholder for any image that still hasn't loaded
    setTimeout(function() {
      content.querySelectorAll('img').forEach(function(img) {
        if (!img.complete || img.naturalWidth === 0) {
          img.style.backgroundColor = '#e2e8f0';
          img.style.minHeight = '200px';
        }
      });
    }, 5000);
  }

  // Reveal if already unlocked this session
  if (sessionStorage.getItem('shippingRevealed') === '1') {
    revealGallery();
  }

  gateBtn.addEventListener('click', function() {
    setTimeout(function() {
      revealGallery();
      sessionStorage.setItem('shippingRevealed', '1');

      if (typeof gtag !== 'undefined') {
        gtag('event', 'shipping_gate_unlock', {
          event_category: 'engagement',
          event_label: 'whatsapp_shipping_photos'
        });
      }
    }, 300);
  });
})();
