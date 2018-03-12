window.customElements.define('th-header',
  class ThHeader extends HTMLElement{
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
        h1{
          display: inline-block;
        }

        header{
          padding: 1em;
          background-color: var(--theme-background-color);
          color: var(--theme-color);
        }

        header a{
          color: var(--theme-color);
          text-decoration: none;
        }

        nav{
          display: inline-block;
        }

        nav ul{
          list-style-type: none;
        }

        nav ul li{
          display: inline-block;
        }

        nav ul li:after{
          content: " | ";
        }
      `;
      return styleBlock;
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('header');
      bodyBlock.innerHTML = `
        <h1><a href="/">ThirstyHead</a></h1>

        <nav>
          <ul>
            <li><a href="/training">Training</a></li>
            <li><a href="/presentations">Presentations</a></li>
            <li><a href="/videos">Videos</a></li>
            <li><a href="/src">Source Code</a></li>
          </ul>
        </nav>
      `;
      return bodyBlock;
    }
  }
);
