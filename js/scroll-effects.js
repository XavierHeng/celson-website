/*!
 * CELSON — Scroll Effects
 * Navbar glass morphism, scroll progress, back-to-top, number counters
 */

/* --- M1: Navbar Glass Morphism on Scroll --- */
(function(){
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', function(){
    if (window.scrollY > 50) header.classList.add('header-glass');
    else header.classList.remove('header-glass');
  }, {passive: true});
})();

/* --- M2: Scroll Progress Bar --- */
window.addEventListener('scroll', function(){
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = pct + '%';
}, {passive: true});

/* --- M4: Back-to-Top Button --- */
(function(){
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function(){
    if (window.scrollY > 500) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }, {passive: true});
  btn.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
})();

/* --- M5: Number Counter Scroll Animation --- */
(function(){
  function animateCounters(){
    document.querySelectorAll('.stat-number[data-target], .factory-card .num[data-target]').forEach(function(el){
      if (el.dataset.animated) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100){
        el.dataset.animated = '1';
        var target = parseInt(el.dataset.target);
        var duration = 1500;
        var start = performance.now();
        function update(now){
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(update);
      }
    });
  }
  window.addEventListener('scroll', animateCounters, {passive: true});
  animateCounters();
})();
