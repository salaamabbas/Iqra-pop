// main-counters.js
// Animates counters when they scroll into view

document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter-number');
  let animated = false;

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const duration = 1400;
    const start = 0;
    const step = Math.ceil(target / (duration / 16));
    let current = start;
    function update() {
      current += step;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(update);
      }
    }
    update();
  }

  function handleScroll() {
    if (animated) return;
    const section = document.getElementById('stats-counters');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      counters.forEach(animateCounter);
      animated = true;
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // In case already in view
});
