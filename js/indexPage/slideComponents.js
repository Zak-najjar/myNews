
const slider = `<div class="carousel-item">
                  <a href="" class="article__link">
                    <img src="" class="d-block w-100" alt="pic">
                    <div class="carousel__title">
                      <h5></h5>
                    </div>
                  </a>
                </div>
`;

class sliderComponents extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = slider;
    this.querySelector('h5').innerText = this.getAttribute('slide-text');
    this.querySelector('img').setAttribute('src', this.getAttribute('slide-src'));
    this.querySelector('a').setAttribute('href', this.getAttribute('slide-href'));
  }
}

window.customElements.define("slider-components", sliderComponents)

// class sliderComponents extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback(){
//     this.innerHTML = `<h1>${this.getAttribute('text')}</h1>`
//     // this.querySelector('h1').innerText = this.getAttribute('text');
//   }
// };

// window.customElements.define('slider-components', sliderComponents);

