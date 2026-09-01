(() => {
  const style = document.createElement('style');
  style.textContent = `
    /* Deterministic LLC page refinements: no generated imagery. */
    .site-header{height:96px;padding:0 clamp(34px,5vw,82px);gap:28px}
    .brand{position:relative;width:315px;height:78px;overflow:hidden;flex:0 0 315px}
    .brand img{position:absolute!important;width:315px!important;height:auto!important;max-width:none!important;left:0;top:-55px;object-fit:initial!important}
    .main-nav{gap:clamp(14px,1.55vw,28px);font-size:10.5px}
    .main-nav>a{display:none}
    .main-nav>.active{border-bottom:0!important;padding-bottom:0!important}
    .llc-nav-item{position:relative;display:flex;align-items:center;border-bottom:0!important;padding-bottom:0!important}
    .llc-nav-button{appearance:none;border:0;background:transparent;color:var(--navy);font:inherit;font-weight:700;text-transform:uppercase;white-space:nowrap;padding:14px 4px;cursor:pointer}
    .llc-nav-item.active>.llc-nav-button{border-bottom:3px solid var(--red)}
    .llc-nav-button::after{content:"";display:inline-block;width:6px;height:6px;margin-left:9px;border-right:1.7px solid currentColor;border-bottom:1.7px solid currentColor;transform:translateY(-2px) rotate(45deg);transition:transform .16s ease}
    .llc-nav-item.open>.llc-nav-button::after{transform:translateY(2px) rotate(225deg)}
    .llc-nav-dropdown{position:absolute;z-index:50;top:calc(100% - 3px);left:0;min-width:250px;padding:9px;border:1px solid #dfe5ee;border-top:3px solid var(--red);border-radius:0 0 9px 9px;background:#fff;box-shadow:0 16px 34px rgb(8 45 99 / 18%);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-6px);transition:.15s ease}
    .llc-nav-item.open>.llc-nav-dropdown{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}
    .llc-nav-dropdown a{display:block;padding:9px 11px;border-radius:5px;color:#183567;font-size:12px;font-weight:600;text-decoration:none;text-transform:none;white-space:nowrap}
    .llc-nav-dropdown a:hover,.llc-nav-dropdown a:focus-visible{background:#f1f5fa;outline:none}
    .llc-contact{display:inline-flex!important;padding:12px 18px!important;border:1px solid var(--blue)!important;border-radius:4px!important}

    .hero{grid-template-columns:52% 48%;min-height:384px}
    .hero-copy{padding:38px 5.5vw 34px}
    .hero h1{font-size:clamp(39px,3.35vw,56px);line-height:1.04}
    .hero-lead{max-width:545px;margin:19px 0 24px;font-size:16px}
    .hero-media{position:relative;min-height:384px;overflow:hidden;background:#f4f5f6;display:block}
    .hero-slide{position:absolute!important;inset:0!important;left:0!important;top:0!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;transform:none!important;opacity:0;transition:opacity 1s ease;object-position:center!important;padding:0!important;background:transparent!important;image-rendering:auto}
    .hero-slide.is-active{opacity:1}
    .slide-primary{object-fit:cover!important}
    .slide-secondary{object-fit:cover!important}

    .benefits{margin-top:-12px}
    .benefits article{padding:20px 24px}
    .section{padding-top:27px}
    .section-heading{font-size:19px;gap:12px;margin-bottom:17px}
    .section-heading span{width:38px}
    .service-grid article{padding:18px 14px}
    .founders{padding-top:14px}
    .lower-grid{padding-top:26px}
    .cta-band{padding-top:22px;padding-bottom:22px}

    @media(max-width:1180px){
      .brand{width:260px;flex-basis:260px}.brand img{width:270px!important;top:-47px}
      .main-nav{gap:9px;font-size:9.5px}
      .llc-nav-button{padding-left:2px;padding-right:2px}.llc-nav-button::after{margin-left:6px}
    }
    @media(max-width:800px){
      .brand{width:280px;height:76px;flex-basis:76px}.brand img{width:280px!important;top:-49px}
      .main-nav{display:flex;flex-wrap:wrap;justify-content:center}
      .llc-nav-dropdown{left:50%;transform:translate(-50%,-6px)}
      .llc-nav-item.open>.llc-nav-dropdown{transform:translate(-50%,0)}
      .hero{grid-template-columns:1fr}.hero-media{min-height:310px}.benefits{margin-top:0}
    }
  `;
  document.head.appendChild(style);

  const nav = document.querySelector('.main-nav');
  if (nav) {
    const menus = [
      ['Company Formation', true, [['LLC Formation','/llc-formation'],['C-Corporation Formation','/#company-formation'],['S-Corporation Election & Setup','/#company-formation'],['Nonprofit Formation','/#company-formation'],['Trust & Asset Structures','/#company-formation']]],
      ['Accounting & Tax', false, [['Business Accounting','/#accounting-tax'],['Business Tax Returns','/#accounting-tax'],['Financial Statements','/#accounting-tax'],['CPA & Tax Professional Access','/#accounting-tax']]],
      ['Banking & Compliance', false, [['U.S. Banking Access','/#banking-compliance'],['Offshore Banking','/#banking-compliance'],['Investment & Brokerage Account Access','/#banking-compliance'],['Compliance & Account Readiness','/#banking-compliance']]],
      ['Market Entry & Growth', false, [['Business Acquisition & Brokerage','/#market-entry-growth'],['Commercial Real Estate & Capital','/#market-entry-growth'],['International Expansion & Advisors','/#market-entry-growth'],['Asset Protection & Structuring','/#market-entry-growth']]],
      ['Services', false, [['Financing & Credit','/#complete-support'],['Advisory & Acquisition','/#complete-support'],['Learning & Resources','/#learning-title']]]
    ];
    menus.forEach(([label,active,links]) => {
      const wrap=document.createElement('div');
      wrap.className='llc-nav-item'+(active?' active':'');
      const btn=document.createElement('button'); btn.className='llc-nav-button'; btn.type='button'; btn.textContent=label; btn.setAttribute('aria-expanded','false');
      const dd=document.createElement('div'); dd.className='llc-nav-dropdown';
      links.forEach(([t,h])=>{const a=document.createElement('a');a.href=h;a.textContent=t;dd.appendChild(a)});
      wrap.append(btn,dd); nav.insertBefore(wrap,nav.querySelector('.contact-link'));
      let timer=0;
      const open=()=>{clearTimeout(timer);nav.querySelectorAll('.llc-nav-item.open').forEach(x=>{if(x!==wrap){x.classList.remove('open');x.querySelector('button')?.setAttribute('aria-expanded','false')}});wrap.classList.add('open');btn.setAttribute('aria-expanded','true')};
      const close=()=>{wrap.classList.remove('open');btn.setAttribute('aria-expanded','false')};
      const later=()=>{clearTimeout(timer);timer=setTimeout(close,160)};
      [wrap,dd].forEach(el=>{el.addEventListener('pointerenter',open);el.addEventListener('pointerleave',later)});
      btn.addEventListener('click',e=>{e.preventDefault();wrap.classList.contains('open')?close():open()});
    });
    const contact=nav.querySelector('.contact-link'); if(contact) contact.classList.add('llc-contact');
    document.addEventListener('click',e=>{if(!nav.contains(e.target))nav.querySelectorAll('.llc-nav-item.open').forEach(x=>x.classList.remove('open'))});
    window.addEventListener('scroll',()=>nav.querySelectorAll('.llc-nav-item.open').forEach(x=>x.classList.remove('open')),{passive:true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')nav.querySelectorAll('.llc-nav-item.open').forEach(x=>x.classList.remove('open'))});
  }

  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length >= 2 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let index = 0;
    window.setInterval(() => {
      slides[index].classList.remove('is-active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('is-active');
    }, 8000);
  }
})();