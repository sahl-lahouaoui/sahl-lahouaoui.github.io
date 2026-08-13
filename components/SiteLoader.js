class SiteLoader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      #loader {
  position: fixed;
  inset: 0;
  background: #1A1A1A;
  display: grid;
  place-items: center;
  z-index: 99999;
}

#loader span img {
  width: 250px;
  height: auto;
}

#loader.hide {
  opacity: 0;
  pointer-events: none;
  transition: opacity .5s ease;
}
      </style>
      <div id="loader">
  <span><img src="images/logo/logo-monochrome.webp"></span>
</div>
      `;
  window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hide");
});
  }
}

customElements.define("site-loader", SiteLoader);


