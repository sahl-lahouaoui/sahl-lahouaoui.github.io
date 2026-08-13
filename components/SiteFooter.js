class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>

.invisible-space {
  visibility: hidden;
  height: 40px;
}
        /* =========================
           FOOTER
        ========================= */

        .site-footer {
          background: var(--black);
          color: #FAFAF7;
          padding: 56px 40px 0;
        }
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;

          max-width: 1100px;
          margin: 0 auto;

          padding-bottom: 40px;
          border-bottom: 1px solid rgba(250, 250, 247, 0.12);
        }

        .footer-brand {
          max-width: 260px;
    
        }

        .footer-logo {
          height: 70px;
          width: auto;
          display: block;
          margin-bottom: 14px;

          filter: brightness(0) invert(1);
        }

        .footer-brand p {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(250, 250, 247, 0.6);
          margin: 0;
        }


        /* =========================
           FOOTER LINKS
        ========================= */

        .footer-links h3,
        .footer-social h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;

          color: rgba(250, 250, 247, 0.5);

          margin: 0 0 16px;
        }

        .footer-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;

          padding: 0;
          margin: 0;
        }

        .footer-links a {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;

          color: #FAFAF7;
          text-decoration: none;

          transition: color 0.25s ease;
        }

        .footer-links a:hover {
          color: var(--white);
        }


        /* =========================
           SOCIAL
        ========================= */

        .footer-social-icons {
          display: flex;
          gap: 12px;
        }

        .footer-social-icons a {
          width: 36px;
          height: 36px;

          border-radius: 50%;
          border: 1px solid rgba(250, 250, 247, 0.18);

          color: #FAFAF7;

          display: flex;
          align-items: center;
          justify-content: center;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-social-icons a:hover {
          background: var(--white);
          border-color: var(--white);
          color: #1A1A1A;
          transform: translateY(-3px);
        }


        /* =========================
           FOOTER BOTTOM
        ========================= */

        .footer-bottom {
          max-width: 1100px;
          margin: 0 auto;

          padding: 20px 0;

          text-align: center;
        }

        .footer-bottom span {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem;
          color: rgba(250, 250, 247, 0.45);
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {

          
          .site-footer {
            padding: 48px 24px 0;
          }

          .footer-top {
            flex-direction: column;
            gap: 32px;
          }

          .footer-brand {
            max-width: 100%;
          }
        }


        /* =========================
           SMALL PHONES
        ========================= */

        @media (max-width: 480px) {

          .contact-text h2 {
            font-size: 48px;
          }

          .contact-text p {
            font-size: 18px;
          }

          .contact-button {
            height: 80px;
          }
        }
      </style>
    <div class="invisible-space"></div>
      <!-- =========================
           FOOTER
      ========================= -->

      <footer class="site-footer">

        <div class="footer-top">


          <!-- BRAND -->

          <div class="footer-brand">

            <img
              src="images/logo/logo-monochrome.webp"
              alt="Sahl logo"
              class="footer-logo"
            >

            <p data-i18n="footer_tagline">
    A collection of ideas, experiments & visual work.
            </p>

          </div>


          <!-- NAVIGATION -->

          <div class="footer-links">

            <h3 data-i18n="footer_nav_title">
              Explore
            </h3>

            <ul>

              <li>
                <a href="index.html" data-i18n="nav_home">
                  Home
                </a>
              </li>

              <li>
                <a href="index.html#about" data-i18n="nav_about">
                  About
                </a>
              </li>

              <li>
                <a href="index.html#portfolio" data-i18n="nav_portfolio">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="index.html#contact" data-i18n="nav_contact">
                  Contact
                </a>
              </li>

              <li>
                <a href="terms.html">
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>


          <!-- SOCIAL -->

          <div class="footer-social">

            <h3 data-i18n="footer_social_title">
              Follow
            </h3>

            <div class="footer-social-icons">


              <!-- Instagram -->

              <a
    href="404.html"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >

                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >

                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                  ></rect>

                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                  ></circle>

                  <circle
                    cx="17.4"
                    cy="6.6"
                    r="1"
                  ></circle>

                </svg>

              </a>


              <!-- Phone -->

              <a
                href="tel:+212649407895"
                aria-label="Call"
              >

                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >

                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.79 19.79 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72
                    c.127.96.362 1.903.7 2.81
                    a2 2 0 0 1-.45 2.11L8.09 9.91
                    a16 16 0 0 0 6 6l1.27-1.27
                    a2 2 0 0 1 2.11-.45
                    c.907.338 1.85.573 2.81.7
                    A2 2 0 0 1 22 16.92z"
                  ></path>

                </svg>

              </a>


              <!-- WhatsApp -->

              <a
                href="https://wa.me/212649407895"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >

                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >

                  <path
                    d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0
                    C5.5 0 .17 5.33.17 11.88
                    c0 2.09.55 4.13 1.6 5.92L.07 24l6.35-1.67
                    a11.84 11.84 0 0 0 5.63 1.43h.01
                    c6.55 0 11.88-5.33 11.88-11.88
                    c0-3.17-1.23-6.15-3.42-8.4z

                    M12.06 21.76h-.01
                    a9.86 9.86 0 0 1-5.03-1.38l-.36-.21
                    -3.77.99 1.01-3.67-.23-.38
                    a9.88 9.88 0 0 1-1.51-5.23
                    c0-5.45 4.44-9.89 9.9-9.89
                    2.64 0 5.12 1.03 6.99 2.9
                    a9.83 9.83 0 0 1 2.9 7
                    c0 5.44-4.44 9.87-9.89 9.87z

                    m5.42-7.4
                    c-.3-.15-1.77-.87-2.05-.97
                    -.27-.1-.47-.15-.67.15
                    -.2.3-.77.97-.94 1.17
                    -.17.2-.35.22-.65.07
                    -.3-.15-1.26-.46-2.4-1.47
                    -.89-.79-1.49-1.77-1.67-2.07
                    -.17-.3-.02-.46.13-.61
                    .13-.13.3-.35.45-.52
                    .15-.17.2-.3.3-.5
                    .1-.2.05-.37-.02-.52
                    -.07-.15-.67-1.62-.92-2.22
                    -.24-.58-.49-.5-.67-.51
                    h-.57c-.2 0-.52.07-.8.37
                    -.27.3-1.04 1.02-1.04 2.49
                    s1.07 2.89 1.22 3.09
                    c.15.2 2.1 3.21 5.09 4.5
                    .71.31 1.27.49 1.7.63
                    .71.23 1.36.2 1.87.12
                    .57-.08 1.77-.72 2.02-1.42
                    .25-.7.25-1.3.17-1.42
                    -.07-.12-.27-.2-.57-.35z"
                  ></path>

                </svg>

              </a>


              <!-- Email -->

              <a
                href="mailto:sahl.lahouaoui.work@gmail.com"
                aria-label="Email"
              >

                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >

                  <rect
                    x="2.5"
                    y="4.5"
                    width="19"
                    height="15"
                    rx="2.5"
                  ></rect>

                  <path
                    d="M3 6.5l9 6.5 9-6.5"
                  ></path>

                </svg>

              </a>

            </div>

          </div>

        </div>


        <!-- COPYRIGHT -->

        <div class="footer-bottom">

          <span>
            &copy;
            <span class="footer-year"></span>
            Sahl.
            <span data-i18n="footer_rights">
              All rights reserved.
            </span>
          </span>

        </div>

      </footer>
    `;

    const year = this.querySelector(".footer-year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }
}

customElements.define("site-footer", SiteFooter);