// Interactive Lorenz curve on the home page.
// Illustrative curve L(p) = p^k, whose Gini coefficient is (k - 1) / (k + 1).
(function () {
  var slider = document.getElementById('k');
  if (!slider) return;
  var curve = document.getElementById('curve');
  var gap = document.getElementById('gap');
  var dot = document.getElementById('dot');
  var dotLabel = document.getElementById('dot-label');
  var desc = document.getElementById('lorenz-desc');
  var giniEl = document.getElementById('gini');
  var bottomEl = document.getElementById('bottom');
  var topEl = document.getElementById('top');

  function draw(k) {
    var d = 'M0,100';
    for (var i = 1; i <= 60; i++) {
      var p = i / 60;
      d += ' L' + (p * 100).toFixed(2) + ',' + (100 - Math.pow(p, k) * 100).toFixed(2);
    }
    curve.setAttribute('d', d);
    gap.setAttribute('d', d + ' L0,100 Z');

    var half = Math.pow(0.5, k);
    var cy = 100 - half * 100;
    dot.setAttribute('cy', cy.toFixed(2));
    dotLabel.setAttribute('y', Math.min(cy + 7, 96).toFixed(2));

    var gini = (k - 1) / (k + 1);
    var top10 = 1 - Math.pow(0.9, k);
    giniEl.textContent = gini.toFixed(2);
    bottomEl.textContent = Math.round(half * 100) + '%';
    topEl.textContent = Math.round(top10 * 100) + '%';
    slider.setAttribute('aria-valuetext', 'Gini coefficient ' + gini.toFixed(2));
    desc.textContent = 'An illustrative Lorenz curve with a Gini coefficient of ' + gini.toFixed(2) +
      '. The poorest half holds ' + Math.round(half * 100) + '% of income and the richest tenth holds ' +
      Math.round(top10 * 100) + '%.';
  }

  slider.addEventListener('input', function () { draw(parseFloat(slider.value)); });

  var target = parseFloat(slider.value);
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { draw(target); return; }

  // One opening moment: the curve sags from the line of equality to its starting position.
  var start = null, duration = 1400;
  draw(1);
  function step(t) {
    if (start === null) start = t;
    var x = Math.min((t - start) / duration, 1);
    var eased = 1 - Math.pow(1 - x, 3);
    draw(1 + (target - 1) * eased);
    if (x < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
