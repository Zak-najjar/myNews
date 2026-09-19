const list = ` <div class="list">
                <a href="" class="article__link">
                  <div class="row">
                    <div class="col-5">
                      <img src="" alt="pic">
                    </div>
                    <div class="col-7">
                      <div class="article__text">
                        <span class="article__category"></span>
                        <h5 class="article__title"></h5>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
`;

class slideArticle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = list;

    this.querySelector('a').setAttribute('href', this.getAttribute('list-href'));
    this.querySelector('img').setAttribute('src', this.getAttribute('list-src'));
    this.querySelector('span').innerText = this.getAttribute('list-category');
    this.querySelector('h5').innerText = this.getAttribute('list-title');

    if(this.getAttribute('excerpt')) {
      this.querySelector('p').innerText = this.getAttribute('excerpt');

    }else {
      this.querySelector('p').style.display= 'none';
    }
  }
}

window.customElements.define('slidearticle-components', slideArticle);