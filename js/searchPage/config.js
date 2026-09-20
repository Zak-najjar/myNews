import { API_URL } from "../urls.js";

export async function fetchsearcharticle() {
  let res = await fetch(API_URL + 'search-article');
  let data = await res.json();

  data.map(bag => {
    const el = document.createElement('search-article-bag');

    el.setAttribute('bag-src', bag.img_uri);
    el.setAttribute('bag-href', bag.link);
    el.setAttribute('bag-title', bag.title);
    el.setAttribute('excerpt', bag.paragraph);
    el.setAttribute('bag-time', moment(parseInt(bag.date)).format('dddd')+ ' , '+ moment(parseInt(bag.date)).format('L'));
    document.getElementById('searchbody').appendChild(el);
    

  });

}


fetchsearcharticle();