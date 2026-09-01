(() => {
  const panel = document.querySelector('.hero-panel');
  if (!panel) return;

  let toggle = document.querySelector('.banking-menu-toggle');
  let menu = document.getElementById('banking-mega-menu');
  const existing = document.querySelector('a.nav-banking');

  if (!toggle && existing) {
    toggle = document.createElement('button');
    toggle.className = 'hotspot nav-banking banking-menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open Banking & Compliance menu');
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'banking-mega-menu');
    existing.replaceWith(toggle);

    toggle.insertAdjacentHTML('afterend', `
      <div class="banking-mega-menu" id="banking-mega-menu" aria-label="Banking and compliance services" aria-hidden="true">
        <section class="banking-menu-column" aria-labelledby="banking-us-heading">
          <div class="banking-menu-heading">
            <span class="banking-menu-icon" aria-hidden="true"><svg><use href="#icon-bank"></use></svg></span>
            <div>
              <span class="banking-menu-kicker">Foreign investors to the U.S.</span>
              <h2 id="banking-us-heading">Open a U.S. Bank Account</h2>
            </div>
          </div>
          <div class="banking-menu-links">
            <a href="#banking-compliance"><span>U.S. Personal Checking Assistance</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>U.S. Business Checking Assistance</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Foreign-Owned LLC / Corporation Banking</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Bank Introductions & Application Support</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>EIN, Entity & KYC Document Readiness</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="banking-menu-column" aria-labelledby="banking-offshore-heading">
          <div class="banking-menu-heading">
            <span class="banking-menu-icon" aria-hidden="true"><svg><use href="#icon-globe"></use></svg></span>
            <div>
              <span class="banking-menu-kicker">U.S. residents to international banking</span>
              <h2 id="banking-offshore-heading">Explore Offshore Banking</h2>
            </div>
          </div>
          <div class="banking-menu-links">
            <a href="#banking-compliance"><span>Offshore Personal Banking Assistance</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Offshore Business Banking Assistance</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Cayman Islands Banking</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Nevis & BVI Banking Options</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Cook Islands & Other Jurisdictions</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="banking-menu-column" aria-labelledby="banking-investment-heading">
          <div class="banking-menu-heading">
            <span class="banking-menu-icon" aria-hidden="true"><svg><use href="#icon-chart"></use></svg></span>
            <div>
              <span class="banking-menu-kicker">Cross-border investing access</span>
              <h2 id="banking-investment-heading">Investment & Brokerage Account Access</h2>
            </div>
          </div>
          <div class="banking-menu-links">
            <a href="#banking-compliance"><span>U.S. Brokerage Accounts for Foreign Individuals</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>U.S. Brokerage Accounts for Foreign-Owned Companies</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Offshore Brokerage Accounts for U.S. Citizens & Residents</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Offshore Investment Accounts for U.S. Companies</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>International Custody & Multi-Currency Accounts</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Broker / Custodian Introductions</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Investment Account KYC & Document Readiness</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="banking-menu-column" aria-labelledby="banking-compliance-heading">
          <div class="banking-menu-heading">
            <span class="banking-menu-icon" aria-hidden="true"><svg><use href="#icon-shield"></use></svg></span>
            <div>
              <span class="banking-menu-kicker">Lawful cross-border access</span>
              <h2 id="banking-compliance-heading">Compliance & Account Readiness</h2>
            </div>
          </div>
          <div class="banking-menu-links">
            <a href="#banking-compliance"><span>KYC / AML Documentation</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Source-of-Funds Preparation</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>Beneficial Ownership Documentation</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>FATCA / CRS Awareness</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>FBAR / Form 8938 Awareness for U.S. Persons</span><b aria-hidden="true">→</b></a>
            <a href="#banking-compliance"><span>CPA / Attorney Referral Where Needed</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <div class="banking-menu-footer">
          <span>Bank and investment accounts are opened directly with participating regulated banks, broker-dealers, custodians or investment platforms. Eligibility depends on residency, citizenship, entity type, KYC/AML, tax documentation and each institution's policies. U.S. persons with foreign accounts may have FATCA, FBAR, Form 8938 and other reporting obligations. No account approval is guaranteed.</span>
          <a href="#contact">Discuss banking & investment access <b aria-hidden="true">→</b></a>
        </div>
      </div>
    `);
    menu = document.getElementById('banking-mega-menu');
  }

  if (!toggle || !menu) return;

  if (!document.getElementById('banking-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'banking-menu-styles';
    style.textContent = `
      .banking-menu-toggle{appearance:none;-webkit-appearance:none;margin:0;padding:0;color:transparent;font:inherit}
      .banking-menu-toggle::after{content:"";position:absolute;top:50%;right:10%;width:7px;height:7px;border-right:2px solid var(--brand-blue);border-bottom:2px solid var(--brand-blue);pointer-events:none;transform:translateY(-72%) rotate(45deg);transform-origin:55% 55%;transition:transform .16s ease}
      .banking-menu-toggle[aria-expanded="true"]::after{transform:translateY(-28%) rotate(225deg)}
      .banking-menu-toggle[aria-expanded="true"]{background:rgb(8 45 99 / 6%)}
      .banking-mega-menu{position:absolute;z-index:43;top:8.85%;right:3.5%;left:10%;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));overflow:hidden;visibility:hidden;border:1px solid rgb(9 46 103 / 16%);border-top:4px solid var(--brand-red);border-radius:0 0 15px 15px;background:rgb(255 255 255 / 98.5%);box-shadow:0 22px 58px rgb(0 24 65 / 30%);color:var(--text-body);line-height:1.35;opacity:0;pointer-events:none;transform:translateY(-10px);transition:opacity .16s ease,transform .16s ease,visibility .16s ease;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
      .hero-panel.banking-menu-open .banking-mega-menu,.banking-mega-menu:focus-within{visibility:visible;opacity:1;pointer-events:auto;transform:translateY(0)}
      .banking-menu-column{min-width:0;padding:24px 18px 22px}.banking-menu-column+.banking-menu-column{border-left:1px solid #e1e7f0}
      .banking-menu-heading{display:flex;align-items:center;gap:10px;min-height:48px;margin-bottom:12px}.banking-menu-icon{display:grid;flex:0 0 40px;width:40px;height:40px;place-items:center;border:1px solid rgb(16 47 131 / 18%);border-radius:50%;background:#f7f9fd;color:var(--brand-blue)}
      .banking-menu-icon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.banking-menu-kicker{display:block;margin-bottom:2px;color:var(--brand-red);font-size:9px;font-weight:700;letter-spacing:.065em;line-height:1.1;text-transform:uppercase}.banking-menu-heading h2{margin:0;color:var(--brand-blue);font-size:clamp(13px,.95vw,17px);font-weight:700;line-height:1.15}
      .banking-menu-links{display:grid;gap:2px}.banking-menu-links a{display:flex;min-height:33px;align-items:center;justify-content:space-between;gap:10px;padding:6px 8px;border-radius:6px;color:#1c3766;font-size:clamp(10px,.72vw,13px);font-weight:600;line-height:1.24;text-decoration:none;transition:background .14s ease,color .14s ease,transform .14s ease}.banking-menu-links a:hover,.banking-menu-links a:focus-visible{background:#f0f5fb;color:var(--brand-blue);outline:none;transform:translateX(2px)}.banking-menu-links a b,.banking-menu-footer a b{flex:0 0 auto;color:var(--brand-red);font-size:14px}
      .banking-menu-footer{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:11px 20px 13px;border-top:1px solid #e1e7f0;background:#f8fafd;color:#62738f;font-size:9px;line-height:1.35}.banking-menu-footer a{flex:0 0 auto;color:var(--brand-blue);font-size:10px;font-weight:700;text-decoration:none}
      @media(max-width:1180px) and (min-width:734px){.banking-mega-menu{right:3%;left:3%;grid-template-columns:repeat(2,minmax(0,1fr));max-height:76vh;overflow-y:auto}.banking-menu-column:nth-child(3){border-left:0;border-top:1px solid #e1e7f0}.banking-menu-column:nth-child(4){border-top:1px solid #e1e7f0}}
      @media(max-width:733px){.banking-menu-toggle,.banking-mega-menu{display:none!important}}
    `;
    document.head.appendChild(style);
  }

  let closeTimer = 0;
  const close = () => {
    window.clearTimeout(closeTimer);
    panel.classList.remove('banking-menu-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open Banking & Compliance menu');
    menu.setAttribute('aria-hidden','true');
  };
  const closeOtherMenus = () => {
    ['company-menu-open','accounting-menu-open','services-menu-open'].forEach(c => panel.classList.remove(c));
    const pairs = [
      ['.company-menu-toggle','#company-mega-menu','Open Company & Entity Formation menu'],
      ['.accounting-menu-toggle','#accounting-mega-menu','Open Accounting & Tax menu'],
      ['.services-menu-toggle','#services-mega-menu','Open Services menu']
    ];
    pairs.forEach(([t,m,label]) => {
      const tt=document.querySelector(t), mm=document.querySelector(m);
      if(tt){tt.setAttribute('aria-expanded','false');tt.setAttribute('aria-label',label)}
      if(mm) mm.setAttribute('aria-hidden','true');
    });
  };
  const open = () => {
    window.clearTimeout(closeTimer);
    closeOtherMenus();
    panel.classList.add('banking-menu-open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Close Banking & Compliance menu');
    menu.setAttribute('aria-hidden','false');
  };
  const scheduleClose = () => { window.clearTimeout(closeTimer); closeTimer = window.setTimeout(close,180); };

  [toggle,menu].forEach(el=>{el.addEventListener('pointerenter',open);el.addEventListener('pointerleave',scheduleClose)});
  toggle.addEventListener('click',e=>{e.preventDefault();panel.classList.contains('banking-menu-open')?close():open()});
  toggle.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();open();menu.querySelector('a')?.focus()}});
  menu.addEventListener('focusin',open);
  menu.addEventListener('click',e=>{if(e.target.closest('a'))close()});
  document.addEventListener('click',e=>{if(!toggle.contains(e.target)&&!menu.contains(e.target))close()});
  document.addEventListener('focusin',e=>{if(!toggle.contains(e.target)&&!menu.contains(e.target))close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel.classList.contains('banking-menu-open')){close();toggle.focus()}});
  window.addEventListener('scroll',close,{passive:true});
  window.addEventListener('resize',close,{passive:true});

  ['.company-menu-toggle','.accounting-menu-toggle','.services-menu-toggle'].forEach(sel=>{
    const el=document.querySelector(sel); if(el) el.addEventListener('pointerenter',close);
  });
})();
