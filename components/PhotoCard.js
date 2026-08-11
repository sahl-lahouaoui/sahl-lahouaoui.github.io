class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      
      </style>
      
      `;
      
  }
}

customElements.define("site-footer", SiteFooter);


