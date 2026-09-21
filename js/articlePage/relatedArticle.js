const list = `                      
                      <a href="" class="article__link">
                        <img src="" alt="pic12">
                        <div class="article__text mt-3">
                          <span class="article__category"></span>
                          <h5 class="article__title"></h5>
                        </div>
                      </a>
`;

class relatedArticle extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML=list;

    this.querySelector('img').setAttribute('src', this.getAttribute('rel-src'));
    this.querySelector('a').setAttribute('href', this.getAttribute('rel-href'));
    this.querySelector('span').innerText = this.getAttribute('rel-category');
    this.querySelector('h5').innerText = this.getAttribute('rel-text');

  }
}

window.customElements.define('related-card', relatedArticle);