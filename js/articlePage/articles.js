const headerComponent = `
        <div class="header__category">
          <span class="me-1"></span> | <span class="ms-1"></span>
        </div>
        <div class="header__title">
          <h2>
          </h2>
        </div>
`;
const metaTemplate = `
  <div class="article__img">
    <img src="" alt="...">
  </div>
  <div class="article__subtitle">
    <span></span>
  </div>
  <div class="article__datetime">
    <time></time>
  </div>
`;

const keyword = `<span class="keyword me-3"></span>`;

class headerComponents extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = headerComponent;
    const spans = this.querySelectorAll('span');
    spans[0].innerText = this.getAttribute('subject');
    spans[1].innerText = this.getAttribute('category');
    this.querySelector('h2').innerText = this.getAttribute('title');
  }
}
window.customElements.define('header-components', headerComponents);

class articleMeta extends HTMLElement {
  constructor(){
    super();
  }

    connectedCallback(){
      this.innerHTML=metaTemplate;
      this.querySelector('img').setAttribute('src', this.getAttribute('src'));
      this.querySelector('span').innerText = this.getAttribute('text');
      this.querySelector('time').dateTime = this.getAttribute('time');
      this.querySelector('time').innerText = this.getAttribute('time');
  }
}
window.customElements.define('article-meta', articleMeta);

class keywords extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = keyword;
    this.querySelector('span').innerText = this.getAttribute('keyword');
  }
}
window.customElements.define('keyword-components', keywords);
