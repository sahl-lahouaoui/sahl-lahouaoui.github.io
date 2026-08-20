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
  animation: logoPulse 1.6s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.85;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
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
        window.addEventListener('load', () => {
            document.getElementById('loader').classList.add('hide');
        });
    }
}

customElements.define('site-loader', SiteLoader);