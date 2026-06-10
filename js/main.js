/*!
 * CELSON — Main JavaScript
 * Navigation active state, mobile menu, smooth scroll, image fallback
 */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Active nav link based on current page --- */
  (function () {
    var path = window.location.pathname;
    var page = path.split('/').pop().replace('.html', '') || 'index';
    var links = document.querySelectorAll('.header-nav a');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.includes(page)) {
        link.classList.add('active');
      }
    });
    // Fallback: home
    if (page === 'index' || page === '') {
      var homeLink = document.querySelector('.header-nav a[href*="index"]');
      if (homeLink) homeLink.classList.add('active');
    }
  })();

  /* --- Mega menu toggle (Products dropdown) --- */
  (function () {
    var megaTrigger = document.querySelector('.nav-products-trigger');
    var megaMenu = document.querySelector('.mega-menu');
    var headerNav = document.querySelector('.header-nav');
    if (!megaTrigger || !megaMenu) return;

    var hideTimer = null;

    function showMega() {
      clearTimeout(hideTimer);
      megaMenu.classList.add('open');
      megaTrigger.classList.add('active');
    }

    function hideMega() {
      hideTimer = setTimeout(function () {
        megaMenu.classList.remove('open');
        megaTrigger.classList.remove('active');
      }, 150);
    }

    function cancelHide() {
      clearTimeout(hideTimer);
    }

    // Desktop: hover to show
    if (window.innerWidth > 768) {
      megaTrigger.addEventListener('mouseenter', showMega);
      megaMenu.addEventListener('mouseenter', cancelHide);
      megaMenu.addEventListener('mouseleave', hideMega);
      megaTrigger.addEventListener('mouseleave', hideMega);

      // Click navigates to products page
      megaTrigger.addEventListener('click', function (e) {
        var href = megaTrigger.getAttribute('data-href');
        if (href) window.location.href = href;
      });
    } else {
      // Mobile: click toggle
      megaTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        megaMenu.classList.contains('open') ? hideMegaImmediate() : showMega();
      });
    }

    function hideMegaImmediate() {
      clearTimeout(hideTimer);
      megaMenu.classList.remove('open');
      megaTrigger.classList.remove('active');
    }

    // Close mega menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!headerNav || !megaMenu) return;
      if (!headerNav.contains(e.target)) {
        hideMegaImmediate();
      }
    });

    // Close mega menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && megaMenu && megaMenu.classList.contains('open')) {
        hideMegaImmediate();
      }
    });

    // Re-check on resize
    window.addEventListener('resize', function () {
      hideMegaImmediate();
    });
  })();

  /* --- Mobile menu toggle --- */
  (function () {
    var toggle = document.querySelector('.mobile-toggle');
    var nav = document.querySelector('.header-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  })();

  /* --- Image fallback: safe replacement without innerHTML --- */
  (function () {
    var imgs = document.querySelectorAll('.placeholder-img[data-fallback]');

    function handleBrokenImage(img) {
      var parent = img.parentElement;
      if (!parent || img.dataset.fallbackHandled) return;
      img.dataset.fallbackHandled = '1';

      var theme = img.getAttribute('data-fallback-theme') || 'green';
      var text = img.getAttribute('data-fallback') || '';

      // Hide the broken image
      img.style.display = 'none';

      // Create fallback span
      var span = document.createElement('span');
      span.className = 'img-fallback-text img-fallback-' + theme;
      span.textContent = text;

      // Set gradient background on parent
      if (theme === 'orange') {
        parent.style.background = 'linear-gradient(135deg, #FFEDD5, #FED7AA)';
      } else if (theme === 'gray') {
        parent.style.background = '#F1F5F9';
      } else {
        parent.style.background = 'linear-gradient(135deg, #DCFCE7, #BBF7D0)';
      }

      parent.appendChild(span);
    }

    imgs.forEach(function (img) {
      img.addEventListener('error', function () { handleBrokenImage(img); }, { once: true });

      // Check after a short delay whether image actually loaded
      window.setTimeout(function () {
        if (!img.dataset.fallbackHandled && !img.complete) {
          // Still loading — let the error handler catch it naturally
          return;
        }
        if (!img.dataset.fallbackHandled && img.complete && img.naturalWidth === 0) {
          handleBrokenImage(img);
        }
      }, 500);
    });
  })();

  /* --- Smooth reveal on scroll --- */
  (function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .benefit-card, .project-card, .factory-card, .stat-item')
      .forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      });
  })();

});
