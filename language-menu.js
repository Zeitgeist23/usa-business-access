(function () {
  "use strict";

  const path = window.location.pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  const routes = {
    "/": { en: "/", es: "/es/", pt: "/pt/" },
    "/llc-formation": { en: "/llc-formation", es: "/es/formacion-llc", pt: "/pt/formacao-llc" },
    "/foreign-owned-us-companies": { en: "/foreign-owned-us-companies", es: "/es/empresas-estadounidenses", pt: "/pt/empresas-americanas" },
    "/banking-compliance": { en: "/banking-compliance", es: "/es/banca-cumplimiento", pt: "/pt/servicos-bancarios-conformidade" },
    "/buy-us-business": { en: "/buy-us-business", es: "/es/comprar-negocio-estados-unidos", pt: "/pt/comprar-empresa-nos-estados-unidos" },
    "/contact": { en: "/contact", es: "/es/contacto", pt: "/pt/contato" }
  };
  const links = routes[path] || routes["/"];
  const current = document.documentElement.lang.toLowerCase().startsWith("es") ? "ES" :
    document.documentElement.lang.toLowerCase().startsWith("pt") ? "PT" : "EN";
  const labels = { en: "English", es: "Español", pt: "Português" };

  const style = document.createElement("style");
  style.textContent = `
    .usaba-language { position: relative; flex: 0 0 auto; font-family: Arial, sans-serif; }
    .usaba-language-button { display:flex; align-items:center; gap:6px; min-height:44px; padding:0 12px; border:1px solid #12b9df; border-radius:7px; background:#fff; color:#082c67; font-size:13px; font-weight:800; cursor:pointer; }
    .usaba-language-button:hover,.usaba-language-button:focus-visible { background:#eefbff; outline:2px solid #12b9df; outline-offset:2px; }
    .usaba-language-list { position:absolute; top:calc(100% + 8px); right:0; z-index:10020; min-width:168px; padding:7px; margin:0; list-style:none; border:1px solid #d5e4ee; border-top:3px solid #12b9df; border-radius:10px; background:#fff; box-shadow:0 16px 38px rgba(4,26,61,.2); opacity:0; visibility:hidden; transform:translateY(-6px); transition:.16s ease; }
    .usaba-language.is-open .usaba-language-list { opacity:1; visibility:visible; transform:none; }
    .usaba-language-list a { display:block; padding:10px 12px; border-radius:7px; color:#082c67; font-size:14px; font-weight:700; text-decoration:none; }
    .usaba-language-list a:hover,.usaba-language-list a:focus-visible { background:#e9faff; color:#047da4; outline:none; }
    .usaba-language-list a[aria-current="page"] { background:#082c67; color:#fff; }
    .image-hotspots .usaba-language { position:absolute; left:84.1%; top:1.65%; z-index:30; }
    .image-hotspots .usaba-language-button { min-height:0; height:5.9vw; max-height:58px; padding:0 .7vw; border-radius:.5vw; background:rgba(255,255,255,.96); }
    @media(max-width:980px){ .site-header .usaba-language-button{padding:0 9px}.site-header .usaba-language-button .language-word{display:none} }
    @media(max-width:733px){ .image-hotspots .usaba-language{position:fixed;left:auto;right:16px;top:16px}.image-hotspots .usaba-language-button{height:44px;max-height:none;padding:0 12px;border-radius:7px} }
  `;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.className = "usaba-language";
  wrap.innerHTML = `<button class="usaba-language-button" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Choose language"><span aria-hidden="true">🌐</span><span class="language-word">${current}</span><span aria-hidden="true">▾</span></button><ul class="usaba-language-list" aria-label="Languages">${Object.entries(labels).map(([code, label]) => `<li><a href="${links[code]}"${current === code.toUpperCase() ? ' aria-current="page"' : ""} lang="${code}">${label}</a></li>`).join("")}</ul>`;

  const contact = document.querySelector(".site-header .contact");
  const hotspotNav = document.querySelector(".image-hotspots");
  if (contact) contact.before(wrap);
  else if (hotspotNav) hotspotNav.appendChild(wrap);
  else return;

  const button = wrap.querySelector("button");
  function close() { wrap.classList.remove("is-open"); button.setAttribute("aria-expanded", "false"); }
  button.addEventListener("click", (event) => { event.stopPropagation(); const open = !wrap.classList.contains("is-open"); close(); if (open) { wrap.classList.add("is-open"); button.setAttribute("aria-expanded", "true"); } });
  document.addEventListener("click", (event) => { if (!wrap.contains(event.target)) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { close(); button.focus(); } });
})();
