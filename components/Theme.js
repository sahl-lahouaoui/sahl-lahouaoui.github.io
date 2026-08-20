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
    --brown: #;
    
    --orange-: 244 122 42;
    --blue-: 96 230 252;
    --white-: 250 250 247;
    --black-: 26 26 26;
    --green-: 135 185 68;
    --red-: 245 55 71;
    --yellow-: 243 210 30;
    
    
    color-scheme: light only;
    }
    
    html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
     background: var(--white) !important;
    }
    
    a, button {
    outline: none;
    }
    
    a:focus, button:focus {
    outline: none;
    }
    
    body {
    font-family: "Plus Jakarta Sans", sans-serif;
    background: var(--white) !important;
    min-height: 100vh;
    }
    
    .ar-text{
    direction: rtl;
    text-align: right;
    }
    h1 {
    font-family: "Sora", sans-serif;
    }
    ::selection {
    background: rgb(var(--orange-) / 60%);
    color: var(--white);
    }
    </style>
    <head>
      <meta name="color-scheme" content="light only">
    </head>
      `;
      
  }
}

customElements.define("site-theme", Theme);


