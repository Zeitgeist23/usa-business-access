(() => {
  const nav = document.querySelector('.main-nav');
  if (nav) {
    const items = Array.from(nav.querySelectorAll('.nav-item'));
    items.forEach((item) => {
      const trigger = item.querySelector('.nav-trigger');
      const menu = item.querySelector('.nav-menu');
      if (!trigger || !menu) return;
      let timer = 0;
      const closeOthers = () => {
        items.forEach((other) => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
          }
        });
      };
      const open = () => {
        clearTimeout(timer);
        closeOthers();
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      };
      const close = () => {
        clearTimeout(timer);
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      };
      const scheduleClose = () => {
        clearTimeout(timer);
        timer = setTimeout(close, 170);
      };
      item.addEventListener('pointerenter', open);
      item.addEventListener('pointerleave', scheduleClose);
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        item.classList.contains('open') ? close() : open();
      });
      trigger.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          open();
          menu.querySelector('a')?.focus();
        }
      });
      menu.addEventListener('focusin', open);
      menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) close();
      });
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) {
        items.forEach((item) => {
          item.classList.remove('open');
          item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        items.forEach((item) => {
          item.classList.remove('open');
          item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
    window.addEventListener('scroll', () => {
      items.forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }, { passive: true });
  }

  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let index = 0;
    window.setInterval(() => {
      slides[index].classList.remove('is-active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('is-active');
    }, 8000);
  }
})();