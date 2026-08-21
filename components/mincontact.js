class mincontact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
    
      /* ========================================
        MINI CONTACT
======================================== */

.mini-contact {
    width: 100%;
    box-sizing: border-box;

    padding: 55px 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 40px;

    background: var(--black);
    color: var(--white);

    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    
    transform: translateY(41px);
}


/* TEXT */

.mini-contact-text {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.mini-contact-text h2 {
    margin: 0;

    font-size: 42px;
    font-weight: 500;

    line-height: 1;

    letter-spacing: -0.03em;
}

.mini-contact-text p {
    margin: 0;

    font-family: 'Plus Jakarta Sans', sans-serif;

    font-size: 16px;
    line-height: 1.5;

    color: rgb(255 255 255 / 65%);
}


/* BUTTON */

.mini-contact-button {
    min-width: 210px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;

    flex-shrink: 0;

    border-radius: 100px;

    background: var(--white);
    color: var(--black);

    text-decoration: none;

    font-size: 15px;
    font-weight: 600;

    box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.2);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        filter 0.2s ease;
}


/* ARROW */

.mini-contact-button .arrow {
    width: 19px;
    height: 19px;

    display: flex;

    flex-shrink: 0;

    transition:
        transform 0.3s ease;
}

.mini-contact-button svg {
    width: 100%;
    height: 100%;
}


/* HOVER */

.mini-contact-button:hover {
    filter: brightness(1.08);

    transform: translateY(-2px);

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.25);
}

.mini-contact-button:hover .arrow {
    transform: translateX(5px);
}


/* ACTIVE */

.mini-contact-button:active {
    transform: translateY(1px);

    box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.2);
}


/* ========================================
              TABLET
======================================== */

@media (max-width: 700px) {

    .mini-contact {
        padding: 45px 25px;

        gap: 30px;
    }

    .mini-contact-text h2 {
        font-size: 36px;
    }

    .mini-contact-text p {
        font-size: 15px;
    }

    .mini-contact-button {
        min-width: 190px;

        height: 55px;

        font-size: 14px;
    }
}


/* ========================================
              MOBILE
======================================== */

@media (max-width: 550px) {

    .mini-contact {
        padding: 45px 20px;

        flex-direction: column;

        align-items: flex-start;

        gap: 28px;
    }

    .mini-contact-text h2 {
        font-size: 38px;
    }

    .mini-contact-text p {
        font-size: 15px;
    }

    .mini-contact-button {
        width: 100%;

        max-width: 280px;

        min-width: 0;
    }
}
      </style>
          <section class="mini-contact" aria-label="Contact">
    <div class="mini-contact-text">
        <h2>Let’s chat.</h2>
        <p>Have something in mind? Let’s connect.</p>
    </div>

    <a href="contact.html" class="mini-contact-button">
        <span>GET IN TOUCH</span>

        <span class="arrow">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                    d="M3.125 10H16.875"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </span>
    </a>
</section>
    
      `;
      
  }
}

customElements.define("min-contact", mincontact);


