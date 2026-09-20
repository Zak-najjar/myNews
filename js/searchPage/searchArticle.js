const bag = `
              <div class="bag">
                <a href="" class="article__link">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bag__img">
                        <img src="" alt="...">
                      </div>
                    </div>
                    <div class="col-md-8">
                      <h4 class="article__title"></h4>
                      <p>
                      </p>
                      <time datetime=""></time>
                    </div>
                  </div>
                </a>
              </div>

`;

class searchArticle extends HTMLElement {
  constructor(){
    super();
  }

    connectedCallback(){
    this.innerHTML = bag;

    this.querySelector('a').setAttribute('href', this.getAttribute('bag-href'));
    this.querySelector('h4').innerText = this.getAttribute('bag-title');
    this.querySelector('img').setAttribute('src', this.getAttribute('bag-src'));
    this.querySelector('p').innerText = this.getAttribute('excerpt');
    this.querySelector('time').setAttribute('datetime', this.getAttribute('bag-time'));
    this.querySelector('time').innerHTML = this.getAttribute('bag-time');

    }
  }


  window.customElements.define('search-article-bag', searchArticle);