const bigMostCard = `        
        <div class="card__news">
          <a href="" class="article__link">
            <div class="card__img">
              <img src="" alt="pic">
            </div>
            <div class="card__text">
              <h4 class="article__title"></h4>
              <time datetime="">

              </time>
            </div>
          </a>
        </div>

`

class bigMostReadCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML= bigMostCard;


    this.querySelector('a').setAttribute('href', this.getAttribute('bigRead-href'))
    this.querySelector('img').setAttribute('src', this.getAttribute('bigRead-src'))
    this.querySelector('h4').innerText = this.getAttribute('bigRead-title')
    this.querySelector('time').innerText = this.getAttribute('bigRead-time')
    this.querySelector('time').setAttribute('datetime', this.getAttribute('bigRead-time'))
    
  }
}

window.customElements.define('big-most-read-card', bigMostReadCard);