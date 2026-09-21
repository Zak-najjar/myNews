const card= `                  
                  <a href="" class="article__link">
                    <div class="story__card mt-5">
                      <div class="row">
                        <div class="col-sm-4">
                          <img src="" alt="...">
                        </div>
                        <div class="col-sm-8">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </a>
`

class suggestedArticle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = card;


    this.querySelector('a').setAttribute('href', this.getAttribute('sug-href'));
    this.querySelector('p').innerText = this.getAttribute('sug-title');
    this.querySelector('img').setAttribute('src', this.getAttribute('sug-src'));

  }
}
window.customElements.define('suggested-articles-card', suggestedArticle);