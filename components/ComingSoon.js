class ComingSoon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <style>
      .page-note {
    color: color-mix(in srgb, var(--black) 70%, transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    font-size: 18px;
}
      </style>
              <p class="page-note">!!..This is not the final version.<br>More updates coming soon. ;)</p>

      `;
    }
}

customElements.define('c-s', ComingSoon);
