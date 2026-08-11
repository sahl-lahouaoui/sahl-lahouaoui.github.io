class Theme extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    *{
    margin: 0;
    padding: 0;
    box-sizing:
    border-box;
    -webkit-tap-highlight-color: transparent;
    }
    
    :root{
    --paper: #FAFAF7;
    --orange: #F47A2A;
    --blue: #60E6FC;
    --white: #FAFAF7;
    --black: #1A1A1A;
    --green: #87B944;
    --red: #F53747;
    --yellow: #F3D21E;
    --brawn: #;
    }
    
    html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
    }
    
    a, button {
    outline: none;
    }
    
    a:focus, button:focus {
    outline: none;
    }
    
    body {
    font-family: 'Manrope' , sans-serif;
    background: #FAFAF7;
    min-height: 100vh;
    }
    
    .ar-text{
    direction: rtl;
    text-align: right;
    }
    h1 {
    font-family: 'Space Grotesk';
    }
    </style>
      
      `;
      
  }
}

customElements.define("site-theme", Theme);


