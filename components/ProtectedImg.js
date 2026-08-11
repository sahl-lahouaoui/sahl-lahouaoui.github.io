class ProtectedImg extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      img.protected{
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    user-select: none;
    -webkit-user-select: none;
}
      </style>
      
      `;
      document.querySelectorAll("img.protected").forEach(img => {

    img.draggable = false;

    img.addEventListener("dragstart", e => e.preventDefault());

    img.addEventListener("contextmenu", e => e.preventDefault());

    img.addEventListener("selectstart", e => e.preventDefault());

    img.style.userSelect = "none";
    img.style.webkitUserSelect = "none";
    img.style.webkitTouchCallout = "none";
    img.style.pointerEvents = "auto";

    img.addEventListener("touchstart", function(e) {
        if (e.touches.length === 1) {
            this.longPress = setTimeout(() => {
                e.preventDefault();
            }, 500);
        }
    }, { passive: false });

    img.addEventListener("touchend", function() {
        clearTimeout(this.longPress);
    });

});

document.addEventListener("contextmenu", e => {
    if (e.target.matches("img.protected")) {
        e.preventDefault();
    }
});

document.addEventListener("keydown", e => {

    if ((e.ctrlKey || e.metaKey) &&
        ["s", "u"].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }

    if (e.key === "PrintScreen") {
        e.preventDefault();
    }

});
  }
}

customElements.define("protected-img", ProtectedImg);


