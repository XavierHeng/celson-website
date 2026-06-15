/**
 * CELSON Shipping Filmstrip Controls
 * Extracted from index.html inline script (2026-06-15)
 */
(function() {
  'use strict';
  var track = document.getElementById('shippingTrack');
  var counter = document.getElementById('shippingCounter');
  var prev = document.querySelector('.shipping-prev');
  var next = document.querySelector('.shipping-next');
  if (!track) return;
  var total = track.querySelectorAll('.shipping-item').length;

  function itemWidth() { return 340 + 16; }

  function updateCounter() {
    var idx = Math.round(track.scrollLeft / itemWidth()) + 1;
    if (idx < 1) idx = 1; if (idx > total) idx = total;
    if (counter) counter.textContent = idx + ' / ' + total;
  }

  if (prev) prev.addEventListener('click', function() { track.scrollBy({ left: -itemWidth(), behavior: 'smooth' }); });
  if (next) next.addEventListener('click', function() { track.scrollBy({ left: itemWidth(), behavior: 'smooth' }); });
  track.addEventListener('scroll', updateCounter, { passive: true });
  updateCounter();
})();
