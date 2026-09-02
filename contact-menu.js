(function () {
  "use strict";

  const EMAIL = "contact@usabusinessaccess.com";
  const PHONE_DISPLAY = "+1 (312) 515-3372";
  const PHONE_HREF = "+13125153372";
  const triggers = Array.from(document.querySelectorAll(".site-header .contact, .nav-contact"));

  if (!triggers.length) return;

  const style = document.createElement("style");
  style.textContent = `
    .usaba-contact-menu {
      position: fixed;
      z-index: 10000;
      width: min(350px, calc(100vw - 28px));
      padding: 14px;
      border: 1px solid rgba(10, 47, 105, .16);
      border-top: 4px solid #19bce3;
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 18px 46px rgba(4, 26, 61, .24);
      color: #082c67;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
    }
    .usaba-contact-menu.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .usaba-contact-menu-title {
      margin: 1px 4px 11px;
      font: 800 13px/1.2 Arial, sans-serif;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: #082c67;
    }
    .usaba-contact-option {
      display: grid;
      grid-template-columns: 42px 1fr auto;
      align-items: center;
      gap: 11px;
      min-height: 68px;
      padding: 10px 11px;
      border: 1px solid #d8e3ef;
      border-radius: 10px;
      color: #082c67;
      text-decoration: none;
      transition: border-color .16s ease, background .16s ease, transform .16s ease;
    }
    .usaba-contact-option + .usaba-contact-option { margin-top: 9px; }
    .usaba-contact-option:hover,
    .usaba-contact-option:focus-visible {
      border-color: #19bce3;
      background: #f0fbff;
      outline: none;
      transform: translateY(-1px);
    }
    .usaba-contact-icon {
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #e6f9fd;
      color: #087da2;
      font: 800 21px/1 Arial, sans-serif;
    }
    .usaba-contact-copy { min-width: 0; }
    .usaba-contact-copy strong,
    .usaba-contact-copy span { display: block; }
    .usaba-contact-copy strong {
      margin-bottom: 4px;
      font: 800 15px/1.2 Arial, sans-serif;
      color: #082c67;
    }
    .usaba-contact-copy span {
      overflow-wrap: anywhere;
      font: 600 13px/1.35 Arial, sans-serif;
      color: #49627f;
    }
    .usaba-contact-arrow {
      color: #ed1c2e;
      font: 900 20px/1 Arial, sans-serif;
    }
    @media (max-width: 520px) {
      .usaba-contact-menu {
        right: 14px !important;
        left: 14px !important;
        width: auto;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .usaba-contact-menu,
      .usaba-contact-option { transition: none; }
    }
  `;
  document.head.appendChild(style);

  const menu = document.createElement("div");
  menu.id = "usaba-direct-contact-menu";
  menu.className = "usaba-contact-menu";
  menu.setAttribute("role", "menu");
  menu.setAttribute("aria-label", "Contact USA Business Access");
  menu.setAttribute("aria-hidden", "true");
  menu.innerHTML = `
    <div class="usaba-contact-menu-title">Contact USA Business Access</div>
    <a class="usaba-contact-option" role="menuitem" href="mailto:${EMAIL}?subject=USA%20Business%20Access%20Inquiry">
      <span class="usaba-contact-icon" aria-hidden="true">@</span>
      <span class="usaba-contact-copy"><strong>Email USABA</strong><span>${EMAIL}</span></span>
      <span class="usaba-contact-arrow" aria-hidden="true">→</span>
    </a>
    <a class="usaba-contact-option" role="menuitem" href="tel:${PHONE_HREF}">
      <span class="usaba-contact-icon" aria-hidden="true">☎</span>
      <span class="usaba-contact-copy"><strong>Call USABA</strong><span>${PHONE_DISPLAY}</span></span>
      <span class="usaba-contact-arrow" aria-hidden="true">→</span>
    </a>
  `;
  document.body.appendChild(menu);

  let activeTrigger = null;

  function positionMenu(trigger) {
    const rect = trigger.getBoundingClientRect();
    const menuWidth = Math.min(350, window.innerWidth - 28);
    const left = Math.min(Math.max(14, rect.right - menuWidth), window.innerWidth - menuWidth - 14);
    menu.style.left = `${left}px`;
    menu.style.right = "auto";
    menu.style.top = `${Math.min(rect.bottom + 10, window.innerHeight - menu.offsetHeight - 14)}px`;
  }

  function closeMenu(restoreFocus) {
    if (!activeTrigger) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    triggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    const triggerToFocus = activeTrigger;
    activeTrigger = null;
    if (restoreFocus) triggerToFocus.focus();
  }

  function openMenu(trigger) {
    activeTrigger = trigger;
    menu.classList.add("is-open");
    positionMenu(trigger);
    menu.setAttribute("aria-hidden", "false");
    triggers.forEach((item) => item.setAttribute("aria-expanded", String(item === trigger)));
  }

  triggers.forEach((trigger) => {
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-controls", menu.id);
    trigger.setAttribute("aria-expanded", "false");
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (activeTrigger === trigger) closeMenu(false);
      else openMenu(trigger);
    });
  });

  document.addEventListener("click", (event) => {
    if (!activeTrigger || menu.contains(event.target) || triggers.some((trigger) => trigger.contains(event.target))) return;
    closeMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeTrigger) closeMenu(true);
  });
  window.addEventListener("resize", () => activeTrigger && positionMenu(activeTrigger), { passive: true });
  window.addEventListener("scroll", () => activeTrigger && positionMenu(activeTrigger), { passive: true });
})();
