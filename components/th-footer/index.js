window.customElements.define('th-footer',
  class ThFooter extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.styleBlock);
      shadowRoot.appendChild(this.bodyBlock);
    }

    get styleBlock(){
      let styleBlock = document.createElement('style');
      styleBlock.innerHTML = `

      `;
      return styleBlock;
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('footer');
      bodyBlock.innerHTML = `
        <p>&copy; 2005 - 2018, ThirstyHead</p>
        <p><a href="contact">Contact</a></p>
      `;
      return bodyBlock;
    }
  }
);
