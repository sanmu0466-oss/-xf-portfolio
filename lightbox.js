/* ═══════════ Shared Lightbox + Counter + Nav ═══════════ */
(function() {
  'use strict';

  /* ── Lightbox ── */
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lb-img');
  var lbCaption = document.getElementById('lb-caption');

  window.openLB = function(src, cap) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    if (lbCaption) lbCaption.textContent = cap || '';
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
  };

  window.closeLB = function() {
    if (!lb) return;
    lb.classList.remove('on');
    document.body.style.overflow = '';
    if (lbImg) lbImg.src = '';
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLB();
  });

  /* ── Counter Animation ── */
  function animateCounters() {
    document.querySelectorAll('.counter').forEach(function(el) {
      if (el.dataset.animated) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.dataset.animated = '1';
        var target = parseInt(el.dataset.target);
        var duration = 1200;
        var start = performance.now();
        function step(ts) {
          var progress = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
    });
  }

  /* ── Hero Metric Animation ── */
  function animateMetrics() {
    document.querySelectorAll('.metrics-row .number').forEach(function(el) {
      if (el.dataset.animated) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.dataset.animated = '1';
        var target = parseInt(el.dataset.count);
        var duration = 1000;
        var start = performance.now();
        function step(ts) {
          var progress = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
    });
  }

  window.addEventListener('scroll', function() {
    animateCounters();
    animateMetrics();
  });

  window.addEventListener('load', function() {
    animateCounters();
    animateMetrics();
  });
})();
