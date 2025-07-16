// main-animate.js
// Adds scroll-triggered entrance animations to homepage sections and cards

document.addEventListener('DOMContentLoaded', function () {
  const animatedEls = document.querySelectorAll('.animate-fadeInUp');

  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new window.IntersectionObserver(animateOnScroll, {
    threshold: 0.15
  });

  animatedEls.forEach(el => {
    observer.observe(el);
  });
});
