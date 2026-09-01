(() => {
  const panel = document.querySelector('.hero-panel');
  const toggle = document.querySelector('.company-menu-toggle');
  const menu = document.getElementById('company-mega-menu');
  if (!panel || !toggle || !menu) return;

  let closeTimer = 0;
  const closeServicesMenu = () => {
    const servicesToggle = document.querySelector('.services-menu-toggle');
    const servicesMenu = document.getElementById('services-mega-menu');
    panel.classList.remove('services-menu-open');
    if (servicesToggle) { servicesToggle.setAttribute('aria-expanded','false'); servicesToggle.setAttribute('aria-label','Open Services menu'); }
    if (servicesMenu) servicesMenu.setAttribute('aria-hidden','true');
  };
  const setOpen = (open) => {
    window.clearTimeout(closeTimer);
    if (open) closeServicesMenu();
    panel.classList.toggle('company-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close Company & Entity Formation menu' : 'Open Company & Entity Formation menu');
    menu.setAttribute('aria-hidden', String(!open));
  };
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const scheduleClose = () => { window.clearTimeout(closeTimer); closeTimer = window.setTimeout(closeMenu,180); };
  [toggle,menu].forEach((el) => { el.addEventListener('pointerenter',openMenu); el.addEventListener('pointerleave',scheduleClose); });
  toggle.addEventListener('click',(e) => { e.preventDefault(); setOpen(!panel.classList.contains('company-menu-open')); });
  toggle.addEventListener('keydown',(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); openMenu(); menu.querySelector('a')?.focus(); } });
  menu.addEventListener('focusin',openMenu);
  menu.addEventListener('click',(e) => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('focusin',(e) => { if (!toggle.contains(e.target) && !menu.contains(e.target)) closeMenu(); });
  document.addEventListener('click',(e) => { if (!toggle.contains(e.target) && !menu.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown',(e) => { if (e.key === 'Escape' && panel.classList.contains('company-menu-open')) { closeMenu(); toggle.focus(); } });
  window.addEventListener('scroll',closeMenu,{passive:true});
  window.addEventListener('resize',closeMenu,{passive:true});
})();
