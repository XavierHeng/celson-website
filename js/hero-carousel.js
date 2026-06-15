/**
 * CELSON Homepage Hero Carousel
 * Extracted from index.html inline script (2026-06-15)
 */
(function() {
  'use strict';
  var slides = document.querySelectorAll('.hero-carousel-slide');
  var dots = document.querySelectorAll('.hero-carousel-dot');
  var prevBtn = document.querySelector('.hero-carousel-prev');
  var nextBtn = document.querySelector('.hero-carousel-next');
  var container = document.querySelector('.hero-carousel');
  if (!slides.length) return;

  var current = 0;
  var total = slides.length;
  var autoTimer = null;
  var interval = 4000;

  function goTo(index) {
    if (index === current) return;
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = ((index % total) + total) % total;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, interval);
  }

  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  // Click arrows: navigate + STOP auto (user is in control)
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    next();
    stopAuto();
  });

  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();
    prev();
    stopAuto();
  });

  // Dot clicks: navigate + STOP auto
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-index'), 10);
      goTo(idx);
      stopAuto();
    });
  });

  // Keyboard: navigate + STOP auto
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { prev(); stopAuto(); }
    if (e.key === 'ArrowRight') { next(); stopAuto(); }
  });

  // Start auto-play
  startAuto();
})();
