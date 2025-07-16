// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinksContainer = document.getElementById('nav-links');
if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
        // Accessibility: update aria-label
        if (navLinksContainer.classList.contains('active')) {
            hamburger.setAttribute('aria-label', 'Close navigation menu');
        } else {
            hamburger.setAttribute('aria-label', 'Open navigation menu');
        }
    });
    // Hide menu after clicking a link (on mobile)
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navLinksContainer.classList.remove('active');
            hamburger.setAttribute('aria-label', 'Open navigation menu');
        });
    });
}

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Registration form handling
const registerForm = document.getElementById('register-form');
const formMessage = document.getElementById('form-message');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Submitting...';
        setTimeout(() => {
            formMessage.textContent = 'Thank you for registering! Your 3 days free trial has started. We will contact you soon.';
            registerForm.reset();
        }, 1200);
    });
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactMessage.textContent = 'Sending...';
        setTimeout(() => {
            contactMessage.textContent = 'Thank you for reaching out! We will reply to your message soon.';
            contactForm.reset();
        }, 1200);
    });
}

// FAQ Toggle Functionality & Testimonial Slider
(function() {
    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((btn, idx) => {
        btn.addEventListener('click', function() {
            const answerId = btn.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            // Close all
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                const aid = q.getAttribute('aria-controls');
                const ans = document.getElementById(aid);
                if (ans) ans.hidden = true;
            });
            // Open this one if it was closed
            if (!expanded) {
                btn.setAttribute('aria-expanded', 'true');
                if (answer) answer.hidden = false;
            }
        });
        // Keyboard support (Enter/Space)
        btn.addEventListener('keydown', function(e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                btn.click();
            }
        });
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;

    function showTestimonial(idx) {
        testimonials.forEach((t, i) => {
            t.classList.toggle('active', i === idx);
            t.style.display = i === idx ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    if (prevBtn && nextBtn && testimonials.length > 0) {
        prevBtn.addEventListener('click', prevTestimonial);
        nextBtn.addEventListener('click', nextTestimonial);
        // Keyboard support
        prevBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                prevTestimonial();
            }
        });
        nextBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextTestimonial();
            }
        });
        // Auto-advance every 7s
        setInterval(nextTestimonial, 7000);
        // Initial state
        showTestimonial(currentTestimonial);
    }
})();

// Form Validation
document.querySelectorAll('input, select, textarea').forEach(input => {
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.classList.add('input-error');
      input.nextElementSibling.style.display = 'block';
    } else {
      input.classList.remove('input-error');
      input.nextElementSibling.style.display = 'none';
    }
  });
});

// FAQ dropdown functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    item.classList.toggle('open');
    // Close others (optional):
    // document.querySelectorAll('.faq-item').forEach(i => { if(i!==item) i.classList.remove('open'); });
  });
});

// Animate progress bars on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.style.width = bar.getAttribute('data-progress') + '%';
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
