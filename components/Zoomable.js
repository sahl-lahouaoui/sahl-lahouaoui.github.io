class Zoomable extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
           /*   zoomabel   */
.zoomable{ cursor:zoom-in; }

  .lightbox-overlay{
    position:fixed; inset:0;
    background:rgba(0,0,0,0.75);
    backdrop-filter:blur(10px);
    opacity:0; pointer-events:none;
    display:flex; align-items:center; justify-content:center;
    z-index:2000;
    transition:opacity 0.3s ease;
  }
  .lightbox-overlay.open{ opacity:1; pointer-events:auto; }

  .lightbox-content{
    position:relative;
    max-width:90vw; max-height:85vh;
    transform:scale(0.94); opacity:0;
    transition:transform 0.35s ease, opacity 0.3s ease;
  }
  .lightbox-overlay.open .lightbox-content{ transform:scale(1); opacity:1; }

  .lightbox-content img{
    display:block;
    max-width:90vw; max-height:85vh;
    border-radius:8px;
  }

  .lightbox-close{
    position:absolute; top:-18px; right:-18px;
    width:38px; height:38px; border-radius:50%;
    background:#fff; border:none; font-size:1.1rem;
    cursor:pointer;
  }
      </style>
        <div class="overlay" id="overlay"></div>
    <div class="lightbox-overlay" id="lightboxOverlay">
  <div class="lightbox-content">
    <button class="lightbox-close" id="lightboxClose">&#10005;</button>
    <img src="" alt="" id="lightboxImg">
  </div>
</div>
      `;
      // ===== Zoomable images (lightbox) =====
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');

    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox(){
      lightboxOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', e => { if (e.target === lightboxOverlay) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  }
}

customElements.define("zoomable-photos", Zoomable);


