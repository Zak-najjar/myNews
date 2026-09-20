const vid = `              
              <a href="" class="article__link">
                <div class="slide__img">
                  <img src="" alt="...">
                  <i class="fa-solid fa-play"></i>
                </div>
                <div class="slide__text">
                  <h5 class="article__title">

                  </h5>
                </div>
              </a>
`;

class videos extends HTMLElement {
  constructor(){
    super();
  }


  connectedCallback(){
    this.innerHTML= vid;

    this.querySelector('a').setAttribute('href', this.getAttribute('vid-href'));
    this.querySelector('img').setAttribute('src', this.getAttribute('vid-src'));
    this.querySelector('h5').innerText = this.getAttribute('vid-title');
  }
}

window.customElements.define('videos-slide', videos)