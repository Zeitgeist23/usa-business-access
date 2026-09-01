(() => {
  const panel = document.querySelector('.hero-panel');
  const servicesToggle = document.querySelector('.services-menu-toggle');
  const servicesMenu = document.getElementById('services-mega-menu');

  if (!panel || !servicesToggle || !servicesMenu) return;

  const closeCompanyMenu = () => {
    const companyToggle = document.querySelector('.company-menu-toggle');
    const companyMenu = document.getElementById('company-mega-menu');
    panel.classList.remove('company-menu-open');
    if (companyToggle) {
      companyToggle.setAttribute('aria-expanded', 'false');
      companyToggle.setAttribute('aria-label', 'Open Company & Entity Formation menu');
    }
    if (companyMenu) companyMenu.setAttribute('aria-hidden', 'true');
  };

  let accountingToggle = document.querySelector('.accounting-menu-toggle');
  let accountingMenu = document.getElementById('accounting-mega-menu');
  const existingAccountingLink = document.querySelector('a.nav-accounting');

  if (!accountingToggle && existingAccountingLink) {
    accountingToggle = document.createElement('button');
    accountingToggle.className = 'hotspot nav-accounting accounting-menu-toggle';
    accountingToggle.type = 'button';
    accountingToggle.setAttribute('aria-label', 'Open Accounting & Tax menu');
    accountingToggle.setAttribute('aria-haspopup', 'true');
    accountingToggle.setAttribute('aria-expanded', 'false');
    accountingToggle.setAttribute('aria-controls', 'accounting-mega-menu');
    existingAccountingLink.replaceWith(accountingToggle);

    accountingToggle.insertAdjacentHTML('afterend', `
      <div
        class="accounting-mega-menu"
        id="accounting-mega-menu"
        aria-label="Accounting and tax services"
        aria-hidden="true"
      >
        <section class="accounting-menu-column" aria-labelledby="accounting-operations-heading">
          <div class="accounting-menu-heading">
            <span class="accounting-menu-icon" aria-hidden="true"><svg><use href="#icon-calculator"></use></svg></span>
            <div>
              <span class="accounting-menu-kicker">Day-to-day finance</span>
              <h2 id="accounting-operations-heading">Business Accounting</h2>
            </div>
          </div>
          <div class="accounting-menu-links">
            <a href="#accounting-tax"><span>Monthly & Quarterly Bookkeeping</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>General Ledger & Reconciliations</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Accounts Payable & Receivable</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Payroll Accounting</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Catch-Up & Cleanup Accounting</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="accounting-menu-column" aria-labelledby="accounting-tax-heading">
          <div class="accounting-menu-heading">
            <span class="accounting-menu-icon" aria-hidden="true"><svg><use href="#icon-document"></use></svg></span>
            <div>
              <span class="accounting-menu-kicker">Business tax filings</span>
              <h2 id="accounting-tax-heading">Business Tax Returns</h2>
            </div>
          </div>
          <div class="accounting-menu-links">
            <a href="#accounting-tax"><span>Form 1065 Partnership Returns</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Form 1120 C-Corporation Returns</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Form 1120-S S-Corporation Returns</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>State & Multi-State Business Returns</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Tax Planning & Estimated Payments</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="accounting-menu-column" aria-labelledby="accounting-reporting-heading">
          <div class="accounting-menu-heading">
            <span class="accounting-menu-icon" aria-hidden="true"><svg><use href="#icon-chart"></use></svg></span>
            <div>
              <span class="accounting-menu-kicker">Financial reporting</span>
              <h2 id="accounting-reporting-heading">Statements & Professional Support</h2>
            </div>
          </div>
          <div class="accounting-menu-links">
            <a href="#accounting-tax"><span>Balance Sheets</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Income Statements</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Profit & Loss Statements</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Cash Flow Statements</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>CPA & Tax Professional Access</span><b aria-hidden="true">→</b></a>
            <a href="#accounting-tax"><span>Bookkeepers, EAs & Fractional Controllers</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <div class="accounting-menu-footer">
          <span>Accounting and tax services may be provided by qualified independent CPAs, EAs, bookkeepers and other professionals.</span>
          <a href="#contact">Discuss your accounting needs <b aria-hidden="true">→</b></a>
        </div>
      </div>
    `);
    accountingMenu = document.getElementById('accounting-mega-menu');
  }

  if (!document.getElementById('accounting-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'accounting-menu-styles';
    style.textContent = `
      .accounting-menu-toggle {
        appearance: none;
        -webkit-appearance: none;
        margin: 0;
        padding: 0;
        color: transparent;
        font: inherit;
      }
      .accounting-menu-toggle::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 1px;
        width: 7px;
        height: 7px;
        border-right: 2px solid var(--brand-blue);
        border-bottom: 2px solid var(--brand-blue);
        pointer-events: none;
        transform: translateY(-72%) rotate(45deg);
        transform-origin: 55% 55%;
        transition: transform .16s ease;
      }
      .accounting-menu-toggle[aria-expanded="true"]::after {
        transform: translateY(-28%) rotate(225deg);
      }
      .accounting-menu-toggle[aria-expanded="true"] {
        background: rgb(8 45 99 / 6%);
      }
      .accounting-mega-menu {
        position: absolute;
        z-index: 42;
        top: 8.85%;
        right: 10.5%;
        left: 18.5%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        overflow: hidden;
        visibility: hidden;
        border: 1px solid rgb(9 46 103 / 16%);
        border-top: 4px solid var(--brand-red);
        border-radius: 0 0 15px 15px;
        background: rgb(255 255 255 / 98.5%);
        box-shadow: 0 22px 58px rgb(0 24 65 / 30%);
        color: var(--text-body);
        line-height: 1.35;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
        transition: opacity .16s ease, transform .16s ease, visibility .16s ease;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
      .hero-panel.accounting-menu-open .accounting-mega-menu,
      .accounting-mega-menu:focus-within {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
      .accounting-menu-column {
        min-width: 0;
        padding: 25px 24px 24px;
      }
      .accounting-menu-column + .accounting-menu-column {
        border-left: 1px solid #e1e7f0;
      }
      .accounting-menu-heading {
        display: flex;
        align-items: center;
        gap: 11px;
        min-height: 48px;
        margin-bottom: 13px;
      }
      .accounting-menu-icon {
        display: grid;
        flex: 0 0 42px;
        width: 42px;
        height: 42px;
        place-items: center;
        border: 1px solid rgb(16 47 131 / 18%);
        border-radius: 50%;
        background: #f7f9fd;
        color: var(--brand-blue);
      }
      .accounting-menu-icon svg {
        width: 25px;
        height: 25px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .accounting-menu-kicker {
        display: block;
        margin-bottom: 2px;
        color: var(--brand-red);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: .09em;
        line-height: 1.1;
        text-transform: uppercase;
      }
      .accounting-menu-heading h2 {
        margin: 0;
        color: var(--brand-blue);
        font-size: clamp(14px, 1.05vw, 18px);
        font-weight: 700;
        letter-spacing: -.01em;
        line-height: 1.15;
      }
      .accounting-menu-links {
        display: grid;
        gap: 2px;
      }
      .accounting-menu-links a {
        display: flex;
        min-height: 35px;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 7px 9px;
        border-radius: 6px;
        color: #1c3766;
        font-size: clamp(11px, .82vw, 14px);
        font-weight: 600;
        line-height: 1.25;
        text-decoration: none;
        transition: background .14s ease, color .14s ease, transform .14s ease;
      }
      .accounting-menu-links a:hover,
      .accounting-menu-links a:focus-visible {
        background: #f0f5fb;
        color: var(--brand-blue);
        outline: none;
        transform: translateX(2px);
      }
      .accounting-menu-links a b,
      .accounting-menu-footer a b {
        flex: 0 0 auto;
        color: var(--brand-red);
        font-size: 15px;
        font-weight: 700;
      }
      .accounting-menu-footer {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 12px 24px 14px;
        border-top: 1px solid #e1e7f0;
        background: #f8fafd;
        color: #62738f;
        font-size: 10px;
        line-height: 1.35;
      }
      .accounting-menu-footer a {
        flex: 0 0 auto;
        color: var(--brand-blue);
        font-size: 11px;
        font-weight: 700;
        text-decoration: none;
      }
      @media (max-width: 980px) and (min-width: 734px) {
        .accounting-mega-menu {
          right: 3%;
          left: 3%;
        }
        .accounting-menu-column { padding: 20px 16px; }
      }
    `;
    document.head.appendChild(style);
  }

  let servicesCloseTimer = 0;
  let accountingCloseTimer = 0;

  const closeAccountingMenu = () => {
    if (!accountingToggle || !accountingMenu) return;
    window.clearTimeout(accountingCloseTimer);
    panel.classList.remove('accounting-menu-open');
    accountingToggle.setAttribute('aria-expanded', 'false');
    accountingToggle.setAttribute('aria-label', 'Open Accounting & Tax menu');
    accountingMenu.setAttribute('aria-hidden', 'true');
  };

  const setServicesOpen = (open) => {
    window.clearTimeout(servicesCloseTimer);
    if (open) {
      closeCompanyMenu();
      closeAccountingMenu();
    }
    panel.classList.toggle('services-menu-open', open);
    servicesToggle.setAttribute('aria-expanded', String(open));
    servicesToggle.setAttribute('aria-label', open ? 'Close Services menu' : 'Open Services menu');
    servicesMenu.setAttribute('aria-hidden', String(!open));
  };

  const setAccountingOpen = (open) => {
    if (!accountingToggle || !accountingMenu) return;
    window.clearTimeout(accountingCloseTimer);
    if (open) {
      closeCompanyMenu();
      setServicesOpen(false);
    }
    panel.classList.toggle('accounting-menu-open', open);
    accountingToggle.setAttribute('aria-expanded', String(open));
    accountingToggle.setAttribute('aria-label', open ? 'Close Accounting & Tax menu' : 'Open Accounting & Tax menu');
    accountingMenu.setAttribute('aria-hidden', String(!open));
  };

  const openServices = () => setServicesOpen(true);
  const closeServices = () => setServicesOpen(false);
  const scheduleServicesClose = () => {
    window.clearTimeout(servicesCloseTimer);
    servicesCloseTimer = window.setTimeout(closeServices, 180);
  };

  servicesToggle.addEventListener('click', (event) => {
    event.preventDefault();
    setServicesOpen(!panel.classList.contains('services-menu-open'));
  });

  servicesToggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openServices();
      servicesMenu.querySelector('a')?.focus();
    }
  });

  [servicesToggle, servicesMenu].forEach((element) => {
    element.addEventListener('pointerenter', openServices);
    element.addEventListener('pointerleave', scheduleServicesClose);
  });

  servicesMenu.addEventListener('focusin', openServices);
  servicesMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeServices();
  });

  if (accountingToggle && accountingMenu) {
    const openAccounting = () => setAccountingOpen(true);
    const scheduleAccountingClose = () => {
      window.clearTimeout(accountingCloseTimer);
      accountingCloseTimer = window.setTimeout(closeAccountingMenu, 180);
    };

    accountingToggle.addEventListener('click', (event) => {
      event.preventDefault();
      setAccountingOpen(!panel.classList.contains('accounting-menu-open'));
    });

    accountingToggle.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        openAccounting();
        accountingMenu.querySelector('a')?.focus();
      }
    });

    [accountingToggle, accountingMenu].forEach((element) => {
      element.addEventListener('pointerenter', openAccounting);
      element.addEventListener('pointerleave', scheduleAccountingClose);
    });

    accountingMenu.addEventListener('focusin', openAccounting);
    accountingMenu.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeAccountingMenu();
    });
  }

  document.addEventListener('focusin', (event) => {
    if (!servicesToggle.contains(event.target) && !servicesMenu.contains(event.target)) closeServices();
    if (accountingToggle && accountingMenu && !accountingToggle.contains(event.target) && !accountingMenu.contains(event.target)) closeAccountingMenu();
  });

  document.addEventListener('click', (event) => {
    if (!servicesToggle.contains(event.target) && !servicesMenu.contains(event.target)) closeServices();
    if (accountingToggle && accountingMenu && !accountingToggle.contains(event.target) && !accountingMenu.contains(event.target)) closeAccountingMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (panel.classList.contains('accounting-menu-open')) {
      closeAccountingMenu();
      accountingToggle?.focus();
    } else if (panel.classList.contains('services-menu-open')) {
      closeServices();
      servicesToggle.focus();
    }
  });

  window.addEventListener('scroll', () => {
    closeServices();
    closeAccountingMenu();
  }, { passive: true });

  window.addEventListener('resize', () => {
    closeServices();
    closeAccountingMenu();
  }, { passive: true });
})();
