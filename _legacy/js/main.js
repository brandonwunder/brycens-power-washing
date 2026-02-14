/* ===========================================
   AZ Concrete King — Main JavaScript
   Shared functionality across all pages
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initBeforeAfterSlider();
  initContactForm();
});

/* === Mobile Navigation Toggle === */

function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking a link (mobile)
  const links = menu.querySelectorAll('.nav__link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* === Scroll Animations === */

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate cards, sections, and slider on scroll
  const animatedElements = document.querySelectorAll(
    '.service-card, .pricing-card, .review-card, .why-us__item, .section-title, .ba-slider'
  );

  animatedElements.forEach((el) => {
    el.classList.add('animate-ready');
    // Stagger siblings within the same parent grid
    const siblings = el.parentElement.querySelectorAll('.animate-ready');
    const siblingIndex = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${siblingIndex * 100}ms`;
    observer.observe(el);
  });
}

/* === Before/After Slider === */

function initBeforeAfterSlider() {
  const sliders = document.querySelectorAll('.ba-slider');

  sliders.forEach(slider => {
    const beforeEl = slider.querySelector('.ba-slider__before');
    const handle = slider.querySelector('.ba-slider__handle');
    if (!beforeEl || !handle) return;

    let isDragging = false;

    const updatePosition = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let percentage = ((clientX - rect.left) / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      beforeEl.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;
      handle.setAttribute('aria-valuenow', Math.round(percentage));
    };

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
      updatePosition(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      updatePosition(e.touches[0].clientX);
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    }, { passive: false });

    slider.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard accessibility
    handle.addEventListener('keydown', (e) => {
      const currentLeft = parseFloat(handle.style.left) || 50;
      const step = 2;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        const newVal = Math.max(0, currentLeft - step);
        beforeEl.style.clipPath = `inset(0 ${100 - newVal}% 0 0)`;
        handle.style.left = `${newVal}%`;
        handle.setAttribute('aria-valuenow', Math.round(newVal));
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        const newVal = Math.min(100, currentLeft + step);
        beforeEl.style.clipPath = `inset(0 ${100 - newVal}% 0 0)`;
        handle.style.left = `${newVal}%`;
        handle.setAttribute('aria-valuenow', Math.round(newVal));
      }
    });
  });
}

/* === Contact Form Handler === */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Request Sent!';
    btn.disabled = true;
    btn.classList.add('btn--success');

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.classList.remove('btn--success');
      form.reset();
    }, 3000);
  });
}

/* === Utility: Generate Star Rating HTML === */

function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    const filled = i < rating;
    stars += `<svg width="20" height="20" viewBox="0 0 20 20" fill="${filled ? 'var(--color-star)' : 'none'}" stroke="var(--color-star)" stroke-width="1.5" aria-hidden="true" class="star-icon">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>`;
  }
  return stars;
}
