const card = `
              <div class="units">
                <a href="" class="article__link">
                  <div class="unit">
                    <div class="unit__img">
                      <img src="" alt="...">
                    </div>
                    <div class="unit__caption">
                      <h5 class="article__title">
                      
                      </h5>
                      <time datetime=""></time>
                    </div>
                  </div>
                </a>
              </div>

`;

class sideMostRead extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = card;


    this.querySelector('a').setAttribute('href', this.getAttribute('card-href'));
    this.querySelector('h5').innerText = this.getAttribute('card-title');
    this.querySelector('img').setAttribute('src', this.getAttribute('card-src'));
    this.querySelector('time').setAttribute('datetime', this.getAttribute('card-time'));
    this.querySelector('time').innerText = this.getAttribute('card-time');

  }
}
window.customElements.define('side-most-read', sideMostRead);