/**
 * CELSON Splash Screen — Premium Animation Engine
 * JS-driven timeline with desktop/mobile variants
 * First-visit only (localStorage permanent flag)
 */
(function () {
  'use strict';

  /* ── Guard: skip if already shown ── */
  if (localStorage.getItem('celson_splash_done')) return;

  /* ── Element refs ── */
  var overlay   = document.getElementById('celson-splash');
  if (!overlay) return;
  var textEl    = overlay.querySelector('.splash-text');
  var subEl     = overlay.querySelector('.splash-subtitle');
  var progress  = overlay.querySelector('.splash-progress');

  /* ── Device & preference detection ── */
  var isMobile  = window.matchMedia('(max-width: 767px)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Timing constants ── */
  var DROP_DURATION  = isMobile ? 550 : 650;   /* Phase 1 */
  var SHAKE_DURATION = isMobile ? 120 : 150;   /* Phase 3 */
  var HOLD_DURATION  = isMobile ? 250 : 300;   /* Phase 4 */
  var FADE_DURATION  = isMobile ? 350 : 400;   /* Phase 5 */
  var TOTAL_DURATION = DROP_DURATION + SHAKE_DURATION + HOLD_DURATION + FADE_DURATION + 60;

  /* ── Utils ── */
  function sleep(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  /* ── Reduced Motion: fast static logo → fade ── */
  function runReducedMotion() {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    textEl.style.transform = 'translate(0, 0) scale(1)';
    textEl.style.transition = 'none';
    if (subEl) { subEl.style.opacity = '1'; subEl.style.transition = 'none'; }
    if (progress) { progress.style.width = '100%'; progress.style.transition = 'none'; }

    sleep(600).then(function () {
      overlay.style.animation = isMobile
        ? 'dissolveMobile 300ms ease-in-out forwards'
        : 'dissolve 300ms ease-in-out forwards';
      sleep(350).then(function () {
        overlay.style.display = 'none';
        localStorage.setItem('celson_splash_done', '1');
      });
    });
  }

  /* ── Phase 1: Parallax Drop + Scale ── */
  function phaseDrop() {
    return new Promise(function (resolve) {
      var name = isMobile ? 'dropAndScaleMobile' : 'dropAndScale';
      textEl.style.animation = name + ' ' + DROP_DURATION + 'ms cubic-bezier(0.2, 0.9, 0.3, 1.05) forwards';
      setTimeout(resolve, DROP_DURATION);
    });
  }

  /* ── Phase 3: Impact Shake ── */
  function phaseShake() {
    return new Promise(function (resolve) {
      /* Cancel drop animation, lock current transform */
      textEl.style.animation = 'none';
      textEl.offsetHeight; /* force reflow */
      textEl.style.transform = 'translate(0, 0) scale(1)';
      /* Apply shake */
      var name = isMobile ? 'impactShakeMobile' : 'impactShake';
      textEl.style.animation = name + ' ' + SHAKE_DURATION + 'ms ease-out forwards';
      setTimeout(resolve, SHAKE_DURATION);
    });
  }

  /* ── Phase 4 subtitle reveal ── */
  function phaseSubtitle() {
    if (!subEl) return sleep(0);
    subEl.style.animation = 'subtitleIn 250ms ease-out forwards';
    return sleep(250);
  }

  /* ── Phase 5: Dissolve ── */
  function phaseFade() {
    return new Promise(function (resolve) {
      var name = isMobile ? 'dissolveMobile' : 'dissolve';
      overlay.style.animation = name + ' ' + FADE_DURATION + 'ms ease-in-out forwards';
      setTimeout(resolve, FADE_DURATION);
    });
  }

  /* ── Progress bar ── */
  function startProgress() {
    if (!progress) return;
    progress.style.animation = 'progressFill ' + TOTAL_DURATION + 'ms linear forwards';
  }

  /* ── Main sequence ── */
  async function run() {
    /* Wait for fonts (capped at 2s) */
    var fontTimeout = new Promise(function (r) { setTimeout(r, 2000); });
    try { await Promise.race([document.fonts.ready, fontTimeout]); } catch (_) {}

    /* Show overlay */
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    startProgress();

    /* Phase 1 */
    await phaseDrop();

    /* Phase 2 is built into the keyframe overshoot — brief sleep */
    await sleep(isMobile ? 40 : 50);

    /* Phase 3 */
    await phaseShake();

    /* Subtitle reveal during hold */
    phaseSubtitle(); /* fire-and-forget, overlaps with hold */

    /* Phase 4 */
    await sleep(HOLD_DURATION);

    /* Phase 5 */
    await phaseFade();

    /* Cleanup */
    overlay.style.display = 'none';
    overlay.style.visibility = 'hidden';
    localStorage.setItem('celson_splash_done', '1');
  }

  /* ── Boot ── */
  if (reduceMotion) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runReducedMotion);
    } else {
      runReducedMotion();
    }
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

})();
