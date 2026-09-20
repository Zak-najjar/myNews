const list=`
                <a href="" class="article__link">
                  <img src="" alt="...">
                  <div class="card__text mt-3">
                    <span class="article__category"></span>
                    <h5 class="article__title">
                    </h5>
                    <p></p>
                  </div>
                </a>

`;
const list2=`
            <a href="" class="article__link">
              <div class="row">
                <div class="col-sm-6">
                  <img src="" alt="...">
                </div>
                <div class="col-sm-6">
                  <div class="card__text">
                    <span class="article__category"></span>
                    <h5 class="article__title">
                    </h5>
                    <p></p>
                  </div>
                </div>
              </div>
            </a>

`;





class latestNews extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    if(this.getAttribute('position') == "side"){
    this.innerHTML = list2;
    this.querySelector('a').setAttribute('href', this.getAttribute('card-href'))
    this.querySelector('img').setAttribute('src', this.getAttribute('card-src'))
    this.querySelector('span').innerText = this.getAttribute('card-category')
    this.querySelector('h5').innerText = this.getAttribute('card-title')

    if(this.getAttribute('excerpt')) {
      this.querySelector('p').innerText = this.getAttribute('excerpt');

    }else {
      this.querySelector('p').style.display= 'none';
    }

    }else {
    this.innerHTML = list;
    this.querySelector('a').setAttribute('href', this.getAttribute('card-href'))
    this.querySelector('img').setAttribute('src', this.getAttribute('card-src'))
    this.querySelector('span').innerText = this.getAttribute('card-category')
    this.querySelector('h5').innerText = this.getAttribute('card-title')

    if(this.getAttribute('excerpt')) {
      this.querySelector('p').innerText = this.getAttribute('excerpt');

    }else {
      this.querySelector('p').style.display= 'none';
    }



    }
  }
}

window.customElements.define('latest-news-cards', latestNews);