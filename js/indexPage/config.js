import { API_URL } from "../urls.js";


export async function fetchSlider() {
  let res = await fetch(API_URL + 'slider');
  let data = await res.json();

  data.map(slide => {
    const el = document.createElement('slider-components')

    el.setAttribute('slide-src', slide.img_uri)
    el.setAttribute('slide-text', slide.title)
    el.setAttribute('slide-href', slide.link)

    document.getElementById('carousel-inner').appendChild(el)
  })
  let slides = document.getElementsByClassName('carousel-item');
  slides[0].classList.add('active');
};


export async function fetchheaderArticle() {
  let res = await fetch(API_URL + 'header-articles');
  let data = await res.json();

  data.map(list => {
    const el = document.createElement('slidearticle-components');

    el.setAttribute('list-src', list.img_uri);
    el.setAttribute('list-href', list.link);
    el.setAttribute('list-title', list.title);
    el.setAttribute('list-category', list.category);

    document.getElementById('header__news-sideCards').appendChild(el);
  });
}

export async function fetchnews() {
  let res = await fetch(API_URL + 'news');
  let data = await res.json();

  data.map(news => {
    const el = document.createElement('news-components');

    el.setAttribute('new-src', news.img_uri);
    el.setAttribute('new-href', news.link);
    el.setAttribute('new-title', news.title);
    el.setAttribute('new-category', news.category);
    // el.setAttribute('class', 'col-lg-3 col-md-4 col-sm-6 mt-4');
    el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mt-4');
    document.getElementById('news').appendChild(el);
    

  });

}


export async function fetchmostreadcard() {
  let res = await fetch(API_URL + 'most-read');
  let data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if(i%2 == 1){
        const el = document.createElement('big-most-read-card');

        el.setAttribute('bigRead-href', data[i].link)
        el.setAttribute('bigRead-src', data[i].img_uri)
        el.setAttribute('bigRead-title', data[i].title)
        el.setAttribute('bigRead-time', moment(parseInt(data[i].date)).format('dddd')+ ' , '+ moment(parseInt(data[i].date)).format('L'))

        document.getElementById('most-read').appendChild(el);
      }else {
        const el = document.createElement('most-read-card');

        el.setAttribute('read-href', data[i].link)
        el.setAttribute('read-src', data[i].img_uri)
        el.setAttribute('read-title', data[i].title)
        el.setAttribute('excerpt', data[i].paragraph)
        el.setAttribute('read-time',  moment(parseInt(data[i].date)).format('dddd')+ ' , '+ moment(parseInt(data[i].date)).format('L'))

        document.getElementById('most-read').appendChild(el);
    }
  }

}

export async function fetchopinionArticle() {
  let res = await fetch(API_URL + 'opinion-articles');
  let data = await res.json();


  data.map(card => {
    const el = document.createElement('opinion-article-card');

    el.setAttribute('opi-href', card.link);
    el.setAttribute('opi-src', card.user_uri);
    el.setAttribute('opi-title', card.title);
    el.setAttribute('opi-userName', card.user_name);
    el.setAttribute('class', 'col-lg-3 col-md-4 col-sm-6');
    document.getElementById('opinions').appendChild(el);
  });
}




fetchSlider();

fetchheaderArticle();

fetchnews();

fetchmostreadcard();

fetchopinionArticle();