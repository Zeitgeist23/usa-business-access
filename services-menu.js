(() => {
  const panel = document.querySelector('.hero-panel');
  const toggle = document.querySelector('.services-menu-toggle');
  const menu = document.getElementById('services-mega-menu');

  if (!panel || !toggle || !menu) return;

  let closeTimer = 0;

  const setOpen = (open) => {
    window.clearTimeout(closeTimer);
    if (open) {
      const companyToggle = document.querySelector('.company-menu-toggle');
      const companyMenu = document.getElementById('company-mega-menu');
      panel.classList.remove('company-menu-open');
      if (companyToggle) { companyToggle.setAttribute('aria-expanded', 'false'); companyToggle.setAttribute('aria-label', 'Open Company & Entity Formation menu'); }
      if (companyMenu) companyMenu.setAttribute('aria-hidden', 'true');
    }
    panel.classList.toggle('services-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close Services menu' : 'Open Services menu');
    menu.setAttribute('aria-hidden', String(!open));
  };

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const scheduleClose = () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(closeMenu, 180);
  };

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    setOpen(!panel.classList.contains('services-menu-open'));
  });

  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMenu();
      menu.querySelector('a')?.focus();
    }
  });

  [toggle, menu].forEach((element) => {
    element.addEventListener('pointerenter', openMenu);
    element.addEventListener('pointerleave', scheduleClose);
  });

  menu.addEventListener('focusin', openMenu);
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('focusin', (event) => {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('services-menu-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener('scroll', closeMenu, { passive: true });
  window.addEventListener('resize', closeMenu, { passive: true });
})();
