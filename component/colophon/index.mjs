class ThColophon extends HTMLElement{
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
    let thisUrl = new URL(import.meta.url);
    let parts = thisUrl.pathname.split('/');
    parts.pop();
    return thisUrl.origin + parts.join('/') + '/';
  }

  get styleBlock(){
    let styleBlock = document.createElement('style');
    styleBlock.innerHTML = `
      a{
        text-decoration: underline solid red;
        color: var(--theme-background-color);
      }

      img{
        display: inline-block;
        max-width: 60%;
        object-fit: contain;
        margin: 1em 20% 0 20%;
      }

      section{
        background-color: var(--theme-foreground-color);
        color: var(--theme-background-color);
        height: 100%;
      }

      .bio{
        margin: 0 20% 0 20%;
      }

      @media(min-width: 800px){
        img{
          margin: 0 20% 0 20%;
        }
      }
    `;

    return styleBlock;
  }

  get bodyBlock(){
    let bodyBlock = document.createElement('section');
    let imgUrl = this.baseUrl + 'scott-davis.jpg';
    let fullResImgUrl = this.baseUrl + 'scott-davis-full-res.jpg';
    bodyBlock.innerHTML = `
      <a href="${fullResImgUrl}">
        <img src="${imgUrl}" alt="Scott Davis">
      </a>
      <div class="bio">
      <p>
        Scott Davis is a Web Architect and Digital Accessibility Advocate, focusing on the multisensory aspects of web development. In a world where half of all Google searches are done by voice, and 80% of all social media videos are watched with the sound off and closed captions on, accessibility is a springboard for innovation.  
      </p>

      <hr class="clear">

      <p>
        Email: <a href="mailto:scott@thirstyhead.com">scott@thirstyhead.com</a><br>
        Mastodon: <a href="https://mastodon.social/@scottdavis99">@scottdavis99@mastodon.social</a>
      </p>

      </div>
    </article>
    `;

    return bodyBlock;
  }
}

window.customElements.define('th-colophon', ThColophon);
