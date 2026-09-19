const opinioncard = `            
            <div class="opinions__card">
              <a href="" class="article__link">
                <h5 class="article__title"></h5>
                <div class="user__info">
                  <img src="" alt="user">
                  <span></span>
                </div>
              </a>
            </div>
`;

class opinionsArticles extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = opinioncard;


    this.querySelector('a').setAttribute('href', this.getAttribute('opi-href'));
    this.querySelector('h5').innerText = this.getAttribute('opi-title');
    this.querySelector('img').setAttribute('src', this.getAttribute('opi-src'));
    this.querySelector('span').innerText = this.getAttribute('opi-userName');

  }
};

window.customElements.define('opinion-article-card', opinionsArticles);