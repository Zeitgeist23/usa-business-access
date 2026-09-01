(() => {
  const nav = document.querySelector('.main-nav');
  if (nav) {
    const items = [...nav.querySelectorAll('.nav-item')];
    const closeAll = (except = null) => {
      items.forEach((item) => {
        if (item === except) return;
        item.classList.remove('open');
        item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      });
    };
    items.forEach((item) => {
      const trigger = item.querySelector('.nav-trigger');
      const menu = item.querySelector('.nav-menu');
      if (!trigger || !menu) return;
      let timer = 0;
      const open = () => {
        clearTimeout(timer);
        closeAll(item);
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
        timer = setTimeout(close, 160);
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
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) closeAll();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeAll();
    });
    window.addEventListener('scroll', () => closeAll(), { passive: true });
  }

  const slides = [...document.querySelectorAll('.hero-slide')];
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let index = 0;
    window.setInterval(() => {
      slides[index].classList.remove('is-active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('is-active');
    }, 8000);
  }
})();