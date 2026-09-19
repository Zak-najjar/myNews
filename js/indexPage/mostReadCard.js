const mostCard = `        
        <div class="card__news">
          <a href="" class="article__link">
            <div class="row">
              <div class="col-md-5">
                <img src="" alt="pic">
              </div>
              <div class="col-md-7">
                <div class="card__text">
                  <h4 class="article__title"></h4>
                  <p>
                  
                  </p>
                  <time datetime="">
                  </time>
                </div>
              </div>
            </div>
          </a>
        </div>
`

class mostReadCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML= mostCard;

    this.querySelector('a').setAttribute('href', this.getAttribute('read-href'))
    this.querySelector('img').setAttribute('src', this.getAttribute('read-src'))
    this.querySelector('h4').innerText = this.getAttribute('read-title')
    this.querySelector('p').innerText = this.getAttribute('excerpt')
    this.querySelector('time').innerText = this.getAttribute('read-time')
    this.querySelector('time').setAttribute('datetime', this.getAttribute('read-time'))
    
  }
}

window.customElements.define('most-read-card', mostReadCard);