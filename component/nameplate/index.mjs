class ThNameplate extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    let shadowRoot = this.attachShadow({mode:'open'});
    shadowRoot.appendChild(this.styleBlock);
    shadowRoot.appendChild(this.bodyBlock);
  }

  /**
   * Returns the URL (minus the filename) of this component
   */
  get baseUrl(){
    // http://localhost:8000/components/nameplate/index.mjs
    let thisUrl = new URL(import.meta.url);
    
    // /components/nameplate/index.mjs
    let parts = thisUrl.pathname.split('/');
   
    // index.mjs
    parts.pop();

    // http://localhost:8000/components/nameplate/
    return thisUrl.origin + parts.join('/') + '/';
  }

  get styleBlock(){
    let styleBlock = document.createElement('style');
    styleBlock.innerHTML = `
      header{
        background-color: var(--theme-foreground-color); 
        color: var(--theme-background-color);
        font-family: var(--theme-font-family-heading); 
        padding: 1em;
      }

      img{
        display: inline-block;
        height: 5em;
        object-fit: contain;
        margin-bottom: -1.8em;
      }

      .brand{
        font-size: 4em;
        font-weight: bold;
        margin-bottom: 0;
      }
    `;

    return styleBlock;
  }

  get bodyBlock(){
    let bodyBlock = document.createElement('header');
    let imgUrl = this.baseUrl + 'candle.jpg';
    bodyBlock.innerHTML = `
      <img src="${imgUrl}">
      <span class="brand">ThirstyHead</span>
    `;

    return bodyBlock;
  }
}

window.customElements.define('th-nameplate', ThNameplate);

