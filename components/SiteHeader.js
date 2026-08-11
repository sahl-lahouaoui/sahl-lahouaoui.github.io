import { initTranslations, applyTranslation } from "./translations.js";
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      /* ===== HEADER ===== */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 40px;
    position: sticky;
    top: 0;
    z-index: 1000;

    /* glassmorphism */
    background: rgba(250, 250, 247, 0.6);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(91, 58, 34, 0.12);
  }

  .logo {
    height: 35px;
    width: auto;
    display: block;
  }

  /* ===== NAV (horizontal on desktop) ===== */
  .nav-links {
    display: flex;
    list-style: none;
    gap: 8px;
  }

  .nav-links a {
    position: relative;
    display: inline-block;
    color: #5B3A22;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 999px;
    transition: color 0.3s ease, background 0.3s ease;
  }

  .nav-links a:hover {
    color: #5B3A22;
    background: rgba(91, 58, 34, 0.13);
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 4px;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .nav-links a:hover::after {
    transform: scaleX(1);
  }

/* ===== RIGHT-SIDE CONTROLS (lang switch + hamburger) ===== */
  .right-controls {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  /* ===== LANGUAGE SWITCHER ===== */
  .lang-switch {
    position: relative;
  }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(91, 58, 34, 0.06);
    border: 1px solid rgba(91, 58, 34, 0.15);
    color: #5B3A22;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 7px 12px;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease;
  }

  .lang-btn:hover {
    background: rgba(91, 58, 34, 0.15);
    border-color: rgba(91, 58, 34, 0.4);
  }

  .lang-icon {
    flex-shrink: 0;
  }

  .lang-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 2px;

    background: rgba(250, 250, 247, 0.9);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(91, 58, 34, 0.15);
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(91, 58, 34, 0.18);

    opacity: 0;
    transform: translateY(-6px) scale(0.96);
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .lang-dropdown.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .lang-dropdown button {
    background: none;
    border: none;
    text-align: left;
    color: #5B3A22;
    font-size: 0.9rem;
    padding: 9px 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease;
  }

  .lang-dropdown button:hover {
    background: rgba(91, 58, 34, 0.15);
  }

  .lang-dropdown button.active {
    color: #5B3A22;
    background: rgba(244, 122, 42, 0.6);
    font-weight: 600;
  }

  /* ===== HAMBURGER ICON (right side) ===== */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 7px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    z-index: 1001;
  }

  .hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background: #5B3A22;
    border-radius: 2px;
    transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1),
                width 0.3s ease;
  }

  .hamburger span:nth-child(2) {
    width: 65%;
  }

  .hamburger:hover span:nth-child(2) {
    width: 100%;
  }

  /* Animate the two lines into an X when open */
  .hamburger.active span:nth-child(1) {
    transform: translateY(4.5px) rotate(45deg);
  }

  .hamburger.active span:nth-child(2) {
    transform: translateY(-4.5px) rotate(-45deg);
    width: 100%;
  }

      /* ===== RESPONSIVE: phone size ===== */
  @media (max-width: 768px) {
      .header {
      padding: 16px 20px;
    }

    .hamburger {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: calc(100% + 14px);
      left: 50%;
      width: min(85vw, 340px);
      flex-direction: column;
      gap: 4px;
      padding: 36px 28px;
      isolation: isolate;
      border-radius: 24px;

      transform: translateX(-50%) scale(0.9);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1),
                  opacity 0.2s ease-in;
    }

    .nav-links.open {
      /* open state: soft bounce-in */
      transform: translateX(-50%) scale(1);
      opacity: 1;
      pointer-events: auto;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                  opacity 0.3s ease-out;

      /* This line changes the element's color: card fill color (off-white, semi-transparent) */
      background: rgba(250, 250, 247, 0.8);

      /* This line changes the element's color: blurs whatever shows through the transparent background above */
      backdrop-filter: blur(14px);

      /* This line changes the element's color: Safari/iOS version of the blur above */
      -webkit-backdrop-filter: blur(14px);

      /* This line changes the element's color: card border color (soft brown, low opacity) */
      border: 1px solid rgba(91, 58, 34, 0.15);

      /* This line changes the element's color: drop shadow color beneath the card (brown tint) */
      box-shadow: 0 20px 60px rgba(91, 58, 34, 0.2);
    }

    .nav-links li {
      width: 100%;
      opacity: 0;
      transform: translateY(8px) scale(0.96);
      transition: opacity 0.2s ease-in,
                  transform 0.2s cubic-bezier(0.4, 0, 1, 1);
    }

    .nav-links.open li {
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: opacity 0.35s ease-out,
                  transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .nav-links.open li:nth-child(1) { transition-delay: 0.10s; }
    .nav-links.open li:nth-child(2) { transition-delay: 0.15s; }
    .nav-links.open li:nth-child(3) { transition-delay: 0.20s; }
    .nav-links.open li:nth-child(4) { transition-delay: 0.25s; }
    .nav-links.open li:nth-child(5) { transition-delay: 0.30s; }

    /* reverse stagger on close: last item leads the exit */
    .nav-links:not(.open) li:nth-child(1) { transition-delay: 0.08s; }
    .nav-links:not(.open) li:nth-child(2) { transition-delay: 0.06s; }
    .nav-links:not(.open) li:nth-child(3) { transition-delay: 0.04s; }
    .nav-links:not(.open) li:nth-child(4) { transition-delay: 0.02s; }
    .nav-links:not(.open) li:nth-child(5) { transition-delay: 0s; }

    .nav-links a {
      display: block;
      text-align: center;
      font-size: 1.1rem;
      padding: 14px 16px;
      color: #5B3A22;
    }

    .nav-links a:active {
      background: rgba(244, 122, 42, 0.4)
    }

    .nav-links a:hover {
      color: #5B3A22;
      background: rgba(91, 58, 34, 0.13);
    }
        .overlay {
      content: "";
      position: fixed;
      inset: 0;
      background: rgba(91, 58, 34, 0.35);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease-in;
      z-index: 999;
      backdrop-filter: blur(8px);
    }

    .overlay.open {
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.35s ease-out;
    }
      }
      </style>
      <header class="header">

  <img src="images/logo/logo-secondary.webp" alt="logo" class="logo">

   <ul class="nav-links" id="navLinks">
    <li><a href="index.html" data-i18n="nav_home">Home</a></li>
    <li><a href="index.html#about" data-i18n="nav_about">About</a></li>
    <li><a href="index.html#portfolio" data-i18n="nav_portfolio">Portfolio</a></li>
    <li><a href="index.html#contact" data-i18n="nav_contact">Contact</a></li>
    <li><a href="#" data-i18n="nav_work">Work</a></li>
  </ul>

     <div class="right-controls">
     <div class="lang-switch" id="langSwitch">
      <button class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false">
        <svg class="lang-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path>
        </svg>
        <span id="langLabel">EN</span>
      </button>

      <div class="lang-dropdown" id="langDropdown">
        <button data-lang="EN" data-name="English">English</button>
        <button data-lang="FR" data-name="Français">Français</button>
        <button data-lang="AR" data-name="العربية">العربية</button>
      </div>
    </div>

  <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu" aria-expanded="false">
    <span></span>
    <span></span>
  </button>
  </div>
</header>
    <div class="overlay" id="overlay"></div>
      `;
      initTranslations();
          // ===== Mobile menu =====
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    const menuOverlay = document.getElementById('overlay');

    function toggleMenu() {
      const isOpen = navLinks.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      menuOverlay.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) toggleMenu();
      });
    });
      
          // ===== Language switcher =====
    const langBtn = document.getElementById('langBtn');
    const langLabel = document.getElementById('langLabel');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = langDropdown.querySelectorAll('button');

    function closeLangDropdown() {
      langDropdown.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', isOpen);
    });

    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        langLabel.textContent = option.dataset.lang;
        langOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        closeLangDropdown();
        applyTranslation(option.dataset.lang);
      });
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && e.target !== langBtn) {
        closeLangDropdown();
      }
    });
  }
}

customElements.define("site-header", SiteHeader);
