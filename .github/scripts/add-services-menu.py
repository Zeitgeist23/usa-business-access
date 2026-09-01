from pathlib import Path

index_path = Path("index.html")
html = index_path.read_text(encoding="utf-8")

stylesheet = '  <link rel="stylesheet" href="styles.css" />'
script_tag = '  <script src="services-menu.js" defer></script>'
if script_tag not in html:
    if stylesheet not in html:
        raise SystemExit("Stylesheet marker not found in index.html")
    html = html.replace(stylesheet, stylesheet + "\n" + script_tag, 1)

old_services_link = '          <a class="hotspot nav-services" href="#complete-support" aria-label="Services"></a>'
menu_markup = '''          <button
            class="hotspot nav-services services-menu-toggle"
            type="button"
            aria-label="Open Services menu"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="services-mega-menu"
          ></button>

          <div
            class="services-mega-menu"
            id="services-mega-menu"
            aria-label="USA Business Access services"
            aria-hidden="true"
          >
            <section class="services-menu-column" aria-labelledby="services-company-heading">
              <div class="services-menu-heading">
                <span class="services-menu-icon" aria-hidden="true">
                  <svg><use href="#icon-building"></use></svg>
                </span>
                <div>
                  <span class="services-menu-kicker">Services</span>
                  <h2 id="services-company-heading">Company Services</h2>
                </div>
              </div>
              <div class="services-menu-links">
                <a href="#company-formation"><span>Company Formation</span><b aria-hidden="true">→</b></a>
                <a href="#accounting-tax"><span>Accounting &amp; Tax</span><b aria-hidden="true">→</b></a>
                <a href="#banking-compliance"><span>Banking &amp; Compliance</span><b aria-hidden="true">→</b></a>
              </div>
            </section>

            <section class="services-menu-column" aria-labelledby="services-credit-heading">
              <div class="services-menu-heading">
                <span class="services-menu-icon" aria-hidden="true">
                  <svg><use href="#icon-bank"></use></svg>
                </span>
                <div>
                  <span class="services-menu-kicker">Capital readiness</span>
                  <h2 id="services-credit-heading">Credit &amp; Financing</h2>
                </div>
              </div>
              <div class="services-menu-links">
                <a href="#business-credit-readiness"><span>Business Credit Readiness</span><b aria-hidden="true">→</b></a>
                <a href="#personal-credit-readiness"><span>Personal Credit Readiness</span><b aria-hidden="true">→</b></a>
                <a href="#sba-loan-guidance"><span>SBA Loan Guidance &amp; Lender Access</span><b aria-hidden="true">→</b></a>
                <a href="#conventional-financing"><span>Conventional Financing</span><b aria-hidden="true">→</b></a>
              </div>
              <p class="services-menu-note">Financing is provided by participating lenders. USA Business Access is not a lender.</p>
            </section>

            <section class="services-menu-column" aria-labelledby="services-market-heading">
              <div class="services-menu-heading">
                <span class="services-menu-icon" aria-hidden="true">
                  <svg><use href="#icon-globe"></use></svg>
                </span>
                <div>
                  <span class="services-menu-kicker">U.S. opportunity</span>
                  <h2 id="services-market-heading">Market Access &amp; Advisory</h2>
                </div>
              </div>
              <div class="services-menu-links">
                <a href="#market-entry-growth"><span>Market Entry &amp; Growth</span><b aria-hidden="true">→</b></a>
                <a href="#us-expansion-strategy"><span>U.S. Expansion Strategy</span><b aria-hidden="true">→</b></a>
                <a href="#business-planning-feasibility"><span>Business Planning &amp; Feasibility</span><b aria-hidden="true">→</b></a>
                <a href="#buy-us-business"><span>Buy a U.S. Business</span><b aria-hidden="true">→</b></a>
              </div>
            </section>

            <section class="services-menu-column services-menu-learning" aria-labelledby="services-learning-heading">
              <div class="services-menu-heading">
                <span class="services-menu-icon" aria-hidden="true">
                  <svg><use href="#icon-guide"></use></svg>
                </span>
                <div>
                  <span class="services-menu-kicker">Education</span>
                  <h2 id="services-learning-heading">Learning Center</h2>
                </div>
              </div>
              <a class="services-menu-feature" href="#learning-title">
                <strong>Explore the Learning Center</strong>
                <span>Practical guidance for forming, financing, operating, and growing a U.S. business.</span>
              </a>
              <div class="services-menu-links services-menu-resource-links">
                <a href="#learning-title"><span>Guides &amp; Articles</span><b aria-hidden="true">→</b></a>
                <a href="#learning-title"><span>Tools &amp; Checklists</span><b aria-hidden="true">→</b></a>
                <a href="#learning-title"><span>State Resources</span><b aria-hidden="true">→</b></a>
              </div>
            </section>

            <div class="services-menu-footer">
              <span>One coordinated partner for every stage of your U.S. business journey.</span>
              <a href="#contact">Speak with our team <b aria-hidden="true">→</b></a>
            </div>
          </div>'''

if 'id="services-mega-menu"' not in html:
    if old_services_link not in html:
        raise SystemExit("Existing Services hotspot not found in index.html")
    html = html.replace(old_services_link, menu_markup, 1)

target_ids = {
    '<li><svg aria-hidden="true"><use href="#icon-building"></use></svg><span>Company Formation</span></li>': '<li id="company-formation"><svg aria-hidden="true"><use href="#icon-building"></use></svg><span>Company Formation</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-calculator"></use></svg><span>Accounting &amp; Tax</span></li>': '<li id="accounting-tax"><svg aria-hidden="true"><use href="#icon-calculator"></use></svg><span>Accounting &amp; Tax</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-bank"></use></svg><span>Banking &amp; Compliance</span></li>': '<li id="banking-compliance"><svg aria-hidden="true"><use href="#icon-bank"></use></svg><span>Banking &amp; Compliance</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-card"></use></svg><span>Business Credit Readiness</span></li>': '<li id="business-credit-readiness"><svg aria-hidden="true"><use href="#icon-card"></use></svg><span>Business Credit Readiness</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-user-card"></use></svg><span>Personal Credit Readiness</span></li>': '<li id="personal-credit-readiness"><svg aria-hidden="true"><use href="#icon-user-card"></use></svg><span>Personal Credit Readiness</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-document"></use></svg><span>SBA Loan Guidance &amp;<br />Lender Access</span></li>': '<li id="sba-loan-guidance"><svg aria-hidden="true"><use href="#icon-document"></use></svg><span>SBA Loan Guidance &amp;<br />Lender Access</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-money"></use></svg><span>Conventional Financing</span></li>': '<li id="conventional-financing"><svg aria-hidden="true"><use href="#icon-money"></use></svg><span>Conventional Financing</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-target"></use></svg><span>Market Entry &amp; Growth</span></li>': '<li id="market-entry-growth"><svg aria-hidden="true"><use href="#icon-target"></use></svg><span>Market Entry &amp; Growth</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-chart"></use></svg><span>U.S. Expansion Strategy</span></li>': '<li id="us-expansion-strategy"><svg aria-hidden="true"><use href="#icon-chart"></use></svg><span>U.S. Expansion Strategy</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-clipboard"></use></svg><span>Business Planning &amp;<br />Feasibility</span></li>': '<li id="business-planning-feasibility"><svg aria-hidden="true"><use href="#icon-clipboard"></use></svg><span>Business Planning &amp;<br />Feasibility</span></li>',
    '<li><svg aria-hidden="true"><use href="#icon-card"></use></svg><span>Buy a U.S. Business</span></li>': '<li id="buy-us-business"><svg aria-hidden="true"><use href="#icon-card"></use></svg><span>Buy a U.S. Business</span></li>',
}
for old, new in target_ids.items():
    if new not in html and old in html:
        html = html.replace(old, new, 1)

index_path.write_text(html, encoding="utf-8")

css_path = Path("styles.css")
css = css_path.read_text(encoding="utf-8")
marker = "/* USA BUSINESS ACCESS SERVICES MEGA MENU */"
if marker not in css:
    css += r'''

/* USA BUSINESS ACCESS SERVICES MEGA MENU */
.services-menu-toggle {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  padding: 0;
  color: transparent;
  font: inherit;
}
.services-menu-toggle[aria-expanded="true"] {
  background: rgb(8 45 99 / 6%);
}
.services-mega-menu {
  position: absolute;
  z-index: 40;
  top: 8.85%;
  right: 3.8%;
  left: 14.5%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
.services-mega-menu::before {
  position: absolute;
  top: -11px;
  right: 8.5%;
  width: 18px;
  height: 18px;
  border-top: 1px solid rgb(9 46 103 / 16%);
  border-left: 1px solid rgb(9 46 103 / 16%);
  background: #fff;
  content: "";
  transform: rotate(45deg);
}
.hero-panel.services-menu-open .services-mega-menu,
.services-mega-menu:focus-within {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.services-menu-column {
  min-width: 0;
  padding: 25px 22px 24px;
}
.services-menu-column + .services-menu-column {
  border-left: 1px solid #e1e7f0;
}
.services-menu-heading {
  display: flex;
  align-items: center;
  gap: 11px;
  min-height: 48px;
  margin-bottom: 13px;
}
.services-menu-icon {
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
.services-menu-icon svg {
  width: 25px;
  height: 25px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.services-menu-kicker {
  display: block;
  margin-bottom: 2px;
  color: var(--brand-red);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .09em;
  line-height: 1.1;
  text-transform: uppercase;
}
.services-menu-heading h2 {
  margin: 0;
  color: var(--brand-blue);
  font-size: clamp(14px, 1.05vw, 18px);
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.15;
}
.services-menu-links {
  display: grid;
  gap: 2px;
}
.services-menu-links a {
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
.services-menu-links a:hover,
.services-menu-links a:focus-visible {
  background: #f0f5fb;
  color: var(--brand-blue);
  outline: none;
  transform: translateX(2px);
}
.services-menu-links a b,
.services-menu-footer a b {
  flex: 0 0 auto;
  color: var(--brand-red);
  font-size: 15px;
  font-weight: 700;
}
.services-menu-note {
  margin: 10px 8px 0;
  color: #62738f;
  font-size: 9px;
  line-height: 1.35;
}
.services-menu-feature {
  display: block;
  margin: 2px 0 8px;
  padding: 13px 14px;
  border: 1px solid rgb(16 47 131 / 13%);
  border-radius: 8px;
  background: linear-gradient(135deg, #f6f9fd, #eef5fb);
  color: var(--brand-blue);
  text-decoration: none;
  transition: border-color .14s ease, box-shadow .14s ease, transform .14s ease;
}
.services-menu-feature:hover,
.services-menu-feature:focus-visible {
  border-color: rgb(16 47 131 / 30%);
  box-shadow: 0 7px 18px rgb(8 45 99 / 10%);
  outline: none;
  transform: translateY(-1px);
}
.services-menu-feature strong {
  display: block;
  margin-bottom: 5px;
  font-size: clamp(12px, .9vw, 15px);
  line-height: 1.2;
}
.services-menu-feature span {
  display: block;
  color: #536b91;
  font-size: 10px;
  line-height: 1.4;
}
.services-menu-resource-links a {
  min-height: 31px;
}
.services-menu-footer {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 24px;
  border-top: 1px solid #e1e7f0;
  background: #f7f9fc;
  color: #52698e;
  font-size: 11px;
  line-height: 1.3;
}
.services-menu-footer a {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 7px;
  color: var(--brand-blue);
  font-weight: 700;
  text-decoration: none;
}
.services-menu-footer a:hover,
.services-menu-footer a:focus-visible {
  text-decoration: underline;
  text-underline-offset: 3px;
  outline: none;
}
.service-list li[id] {
  scroll-margin-top: 26px;
}
.service-list li[id]:target {
  border-radius: 6px;
  background: #f0f5fb;
  box-shadow: 0 0 0 5px #f0f5fb;
}

@media (max-width: 1120px) and (min-width: 734px) {
  .services-mega-menu {
    top: 9.1%;
    right: 3%;
    left: 3%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-height: min(78vh, 610px);
    overflow-y: auto;
  }
  .services-menu-column:nth-child(3) {
    border-left: 0;
  }
  .services-menu-column:nth-child(n + 3) {
    border-top: 1px solid #e1e7f0;
  }
  .services-menu-heading h2 {
    font-size: 16px;
  }
  .services-menu-links a {
    font-size: 13px;
  }
}

@media (max-width: 733px) {
  .services-menu-toggle,
  .services-mega-menu {
    display: none !important;
  }
}
'''
    css_path.write_text(css, encoding="utf-8")

js = r'''(() => {
  const panel = document.querySelector('.hero-panel');
  const toggle = document.querySelector('.services-menu-toggle');
  const menu = document.getElementById('services-mega-menu');

  if (!panel || !toggle || !menu) return;

  let closeTimer = 0;

  const setOpen = (open) => {
    window.clearTimeout(closeTimer);
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

  window.addEventListener('resize', closeMenu, { passive: true });
})();
'''
Path("services-menu.js").write_text(js, encoding="utf-8")
