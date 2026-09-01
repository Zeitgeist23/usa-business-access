(() => {
  const panel = document.querySelector('.hero-panel');
  if (!panel) return;

  let toggle = document.querySelector('.market-menu-toggle');
  let menu = document.getElementById('market-mega-menu');
  const existing = document.querySelector('a.nav-growth');

  if (!toggle && existing) {
    toggle = document.createElement('button');
    toggle.className = 'hotspot nav-growth market-menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open Market Entry & Growth menu');
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'market-mega-menu');
    existing.replaceWith(toggle);

    toggle.insertAdjacentHTML('afterend', `
      <div class="market-mega-menu" id="market-mega-menu" aria-label="Market entry and growth services" aria-hidden="true">
        <section class="market-menu-column" aria-labelledby="market-acquisition-heading">
          <div class="market-menu-heading">
            <span class="market-menu-icon" aria-hidden="true"><svg><use href="#icon-card"></use></svg></span>
            <div>
              <span class="market-menu-kicker">Buy across borders</span>
              <h2 id="market-acquisition-heading">Business Acquisition & Brokerage</h2>
            </div>
          </div>
          <div class="market-menu-links">
            <a href="#buy-us-business"><span>Buy a U.S. Business</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>U.S. Businesses by Industry</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>U.S. Businesses by State</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>International Business Acquisition</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>Business Search / Buyer Representation</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>Business Broker Introductions</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>Business Valuations</span><b aria-hidden="true">→</b></a>
            <a href="#buy-us-business"><span>Acquisition Due Diligence Coordination</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="market-menu-column" aria-labelledby="market-capital-heading">
          <div class="market-menu-heading">
            <span class="market-menu-icon" aria-hidden="true"><svg><use href="#icon-bank"></use></svg></span>
            <div>
              <span class="market-menu-kicker">Capital access</span>
              <h2 id="market-capital-heading">Commercial Real Estate & Capital</h2>
            </div>
          </div>
          <div class="market-menu-links">
            <a href="#complete-support"><span>Commercial Mortgage Lender Search</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Bank Matching</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Private Lender Matching</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Investor / Capital Source Search</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Acquisition Financing</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Refinance & Expansion Capital</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Commercial Real Estate Financing</span><b aria-hidden="true">→</b></a>
            <a href="#complete-support"><span>Loan Packaging & Readiness</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="market-menu-column" aria-labelledby="market-network-heading">
          <div class="market-menu-heading">
            <span class="market-menu-icon" aria-hidden="true"><svg><use href="#icon-people"></use></svg></span>
            <div>
              <span class="market-menu-kicker">Professional network</span>
              <h2 id="market-network-heading">International Expansion & Advisors</h2>
            </div>
          </div>
          <div class="market-menu-links">
            <a href="#contact"><span>U.S. Attorneys</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>International / Offshore Attorneys</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>CPAs & Accountants</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>Tax & Immigration Professionals</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>Corporate Service Providers</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>Local Market Advisors</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>Mexico, Costa Rica & South America</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>Spain, England / UK & Europe</span><b aria-hidden="true">→</b></a>
            <a href="#contact"><span>Cook Islands, Cayman, BVI & Nevis</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section class="market-menu-column" aria-labelledby="market-asset-heading">
          <div class="market-menu-heading">
            <span class="market-menu-icon" aria-hidden="true"><svg><use href="#icon-shield"></use></svg></span>
            <div>
              <span class="market-menu-kicker">Structure & protect</span>
              <h2 id="market-asset-heading">Asset Protection & International Structuring</h2>
            </div>
          </div>
          <div class="market-menu-links">
            <a href="#company-formation"><span>Domestic Asset Protection Planning</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>International Asset Protection Planning</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>Trust Structures</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>Holding Companies</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>Multi-Entity Structures</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>Offshore Entity Coordination</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>Cross-Border Estate / Succession Planning</span><b aria-hidden="true">→</b></a>
            <a href="#company-formation"><span>Attorney & Fiduciary Introductions</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <div class="market-menu-footer">
          <span>USABA may provide search, advisory and coordination services. Brokerage, legal, tax, lending, securities and fiduciary services may be performed by qualified independent professionals where licensing or regulation requires it.</span>
          <a href="#contact">Tell us what you want to accomplish <b aria-hidden="true">→</b></a>
        </div>
      </div>
    `);
    menu = document.getElementById('market-mega-menu');
  }

  if (!toggle || !menu) return;

  if (!document.getElementById('market-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'market-menu-styles';
    style.textContent = `
      .market-menu-toggle{appearance:none;-webkit-appearance:none;margin:0;padding:0;color:transparent;font:inherit}
      .market-menu-toggle::after{content:"";position:absolute;top:50%;right:7%;width:7px;height:7px;border-right:2px solid var(--brand-blue);border-bottom:2px solid var(--brand-blue);pointer-events:none;transform:translateY(-72%) rotate(45deg);transform-origin:55% 55%;transition:transform .16s ease}
      .market-menu-toggle[aria-expanded="true"]::after{transform:translateY(-28%) rotate(225deg)}
      .market-menu-toggle[aria-expanded="true"]{background:rgb(8 45 99 / 6%)}
      .market-mega-menu{position:absolute;z-index:44;top:8.85%;right:2.5%;left:3.5%;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));overflow:hidden;visibility:hidden;border:1px solid rgb(9 46 103 / 16%);border-top:4px solid var(--brand-red);border-radius:0 0 15px 15px;background:rgb(255 255 255 / 98.5%);box-shadow:0 22px 58px rgb(0 24 65 / 30%);color:var(--text-body);line-height:1.35;opacity:0;pointer-events:none;transform:translateY(-10px);transition:opacity .16s ease,transform .16s ease,visibility .16s ease;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
      .hero-panel.market-menu-open .market-mega-menu,.market-mega-menu:focus-within{visibility:visible;opacity:1;pointer-events:auto;transform:translateY(0)}
      .market-menu-column{min-width:0;padding:22px 18px 20px}.market-menu-column+.market-menu-column{border-left:1px solid #e1e7f0}
      .market-menu-heading{display:flex;align-items:center;gap:10px;min-height:48px;margin-bottom:12px}.market-menu-icon{display:grid;flex:0 0 40px;width:40px;height:40px;place-items:center;border:1px solid rgb(16 47 131 / 18%);border-radius:50%;background:#f7f9fd;color:var(--brand-blue)}
      .market-menu-icon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.market-menu-kicker{display:block;margin-bottom:2px;color:var(--brand-red);font-size:9px;font-weight:700;letter-spacing:.07em;line-height:1.1;text-transform:uppercase}.market-menu-heading h2{margin:0;color:var(--brand-blue);font-size:clamp(13px,.95vw,17px);font-weight:700;line-height:1.15}
      .market-menu-links{display:grid;gap:1px}.market-menu-links a{display:flex;min-height:31px;align-items:center;justify-content:space-between;gap:10px;padding:6px 7px;border-radius:6px;color:#1c3766;font-size:clamp(10px,.72vw,13px);font-weight:600;line-height:1.23;text-decoration:none;transition:background .14s ease,color .14s ease,transform .14s ease}.market-menu-links a:hover,.market-menu-links a:focus-visible{background:#f0f5fb;color:var(--brand-blue);outline:none;transform:translateX(2px)}.market-menu-links a b,.market-menu-footer a b{flex:0 0 auto;color:var(--brand-red);font-size:14px}
      .market-menu-footer{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:11px 22px 13px;border-top:1px solid #e1e7f0;background:#f8fafd;color:#62738f;font-size:9.5px;line-height:1.35}.market-menu-footer a{flex:0 0 auto;color:var(--brand-blue);font-size:11px;font-weight:700;text-decoration:none}
      @media(max-width:1180px) and (min-width:734px){.market-mega-menu{right:2.5%;left:2.5%;grid-template-columns:repeat(2,minmax(0,1fr));max-height:76vh;overflow-y:auto}.market-menu-column:nth-child(3){border-left:0}.market-menu-column:nth-child(n+3){border-top:1px solid #e1e7f0}}
      @media(max-width:733px){.market-menu-toggle,.market-mega-menu{display:none!important}}
    `;
    document.head.appendChild(style);
  }

  let closeTimer = 0;
  const close = () => {
    window.clearTimeout(closeTimer);
    panel.classList.remove('market-menu-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open Market Entry & Growth menu');
    menu.setAttribute('aria-hidden','true');
  };
  const closeOtherMenus = () => {
    ['company-menu-open','accounting-menu-open','banking-menu-open','services-menu-open'].forEach(c=>panel.classList.remove(c));
    const pairs=[
      ['.company-menu-toggle','#company-mega-menu','Open Company & Entity Formation menu'],
      ['.accounting-menu-toggle','#accounting-mega-menu','Open Accounting & Tax menu'],
      ['.banking-menu-toggle','#banking-mega-menu','Open Banking & Compliance menu'],
      ['.services-menu-toggle','#services-mega-menu','Open Services menu']
    ];
    pairs.forEach(([t,m,label])=>{const tt=document.querySelector(t),mm=document.querySelector(m);if(tt){tt.setAttribute('aria-expanded','false');tt.setAttribute('aria-label',label)}if(mm)mm.setAttribute('aria-hidden','true')});
  };
  const open = () => {
    window.clearTimeout(closeTimer);
    closeOtherMenus();
    panel.classList.add('market-menu-open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Close Market Entry & Growth menu');
    menu.setAttribute('aria-hidden','false');
  };
  const scheduleClose=()=>{window.clearTimeout(closeTimer);closeTimer=window.setTimeout(close,180)};

  [toggle,menu].forEach(el=>{el.addEventListener('pointerenter',open);el.addEventListener('pointerleave',scheduleClose)});
  toggle.addEventListener('click',e=>{e.preventDefault();panel.classList.contains('market-menu-open')?close():open()});
  toggle.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();open();menu.querySelector('a')?.focus()}});
  menu.addEventListener('focusin',open);
  menu.addEventListener('click',e=>{if(e.target.closest('a'))close()});
  document.addEventListener('click',e=>{if(!toggle.contains(e.target)&&!menu.contains(e.target))close()});
  document.addEventListener('focusin',e=>{if(!toggle.contains(e.target)&&!menu.contains(e.target))close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel.classList.contains('market-menu-open')){close();toggle.focus()}});
  window.addEventListener('scroll',close,{passive:true});
  window.addEventListener('resize',close,{passive:true});

  ['.company-menu-toggle','.accounting-menu-toggle','.banking-menu-toggle','.services-menu-toggle'].forEach(sel=>{const el=document.querySelector(sel);if(el)el.addEventListener('pointerenter',close)});
})();
