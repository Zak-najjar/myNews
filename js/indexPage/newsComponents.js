const newss = `
                <a href="" class="article__link">
                  <img src="" alt="pic">
                  <div class="article__text mt-3">
                    <span class="article__category"></span>
                    <h5 class="article__title"></h5>
                    <p></p>
                  </div>
                </a>
`;

class newsComponents extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = newss;

    this.querySelector('a').setAttribute('href', this.getAttribute('new-href'));
    this.querySelector('img').setAttribute('src', this.getAttribute('new-src'));
    this.querySelector('span').innerText = this.getAttribute('new-category');
    this.querySelector('h5').innerText = this.getAttribute('new-title');
    if(this.getAttribute('excerpt')) {
      this.querySelector('p').innerText = this.getAttribute('excerpt');
    }else {
      this.querySelector('p').style.display="none";
    }
  }
};

window.customElements.define('news-components', newsComponents);