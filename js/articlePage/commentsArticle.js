const card = `                
                <div class="comment__card">
                  <div class="row">
                    <div class="col-lg-2 col-3">
                      <div class="user__info">
                        <img src="" alt="...">
                      </div>
                    </div>
                    <div class="col-lg-10 col-9">
                      <div class="comment__text">
                        <span></span>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
`;

class commentsArticle extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = card;

    this.querySelector('p').innerText = this.getAttribute('com-text');
    this.querySelector('img').setAttribute('src', this.getAttribute('com-src'));
    this.querySelector('span').innerText = this.getAttribute('com-username')
  }
}

window.customElements.define('comment-components', commentsArticle);