import { API_URL } from "../urls.js";


export async function fetchmostread() {
  const res = await fetch(API_URL + 'most-read')
  const data = await res.json();

  const title = document.createElement('h2');
  title.textContent = 'الاكثر قراءة';
  document.getElementById('article-most-read').appendChild(title);

  data.map(card => {
    const el = document.createElement('side-most-read')

    el.setAttribute('card-src', card.img_uri);
    el.setAttribute('card-href', card.link);
    el.setAttribute('card-title', card.title);
    el.setAttribute('card-time', moment(parseInt(card.date)).format('dddd')+ ' , '+ moment(parseInt(card.date)).format('L'));
    document.getElementById('article-most-read').appendChild(el);
  });
  
};


export async function fetcharticles() {
  const res = await fetch(API_URL + 'articles')
  const data = await res.json();
  // header 
    const elhead = document.createElement('header-components');

    elhead.setAttribute('category', data.category);
    elhead.setAttribute('subject', data.subject);
    elhead.setAttribute('title', data.title);

    document.getElementById('article__header').appendChild(elhead);
  

  // pic , subtitle , time
    const meta = document.createElement('article-meta');
      meta.setAttribute('src', data.img_uri)
      meta.setAttribute('text', data.subtitle);
      meta.setAttribute('time', moment(parseInt(data.datetime)).format('dddd')+ ' , '+ moment(parseInt(data.datetime)).format('L'));
    document.getElementById('article__meta').appendChild(meta)
      // artilce part  1
    const articlePart1 = document.createElement('artilce-part-1')
    articlePart1.innerHTML = data.article_part_1;
    document.getElementById('artilce-part1').appendChild(articlePart1);
    // article part 2
    const articlePart2 = document.createElement('artilce-part-2')
    articlePart2.innerHTML = data.article_part_2;
    document.getElementById('artilce-part2').appendChild(articlePart2);
  

    // keywords

    data.keywords.map(key => {
      const el = document.createElement('keyword-components');

      el.setAttribute('keyword', key);
      document.getElementById('artilce-part2').appendChild(el);
    });

    data.comments.map(comment => {
      const card = document.createElement('comment-components');

      card.setAttribute('com-text', comment.text);
      card.setAttribute('com-src', comment.user_img);
      card.setAttribute('com-username', comment.user_name);
      document.getElementById('comment__cards').appendChild(card);
    });

    data.related_articles.map(article => {
      const ic = document.createElement('related-card');

      ic.setAttribute('rel-text', article.title);
      ic.setAttribute('rel-src', article.img_uri);
      ic.setAttribute('rel-href', article.link);
      ic.setAttribute('rel-category', article.category);
      
      ic.setAttribute('class', 'col-lg-4 col-md-3 col-sm-6');

      document.getElementById('relatedArticles').appendChild(ic);
    });


};

export async function fetchsuggestionarticles() {
  const res = await fetch(API_URL + 'suggested-articles')
  const data = await res.json();

  data.map(card => {
    const el = document.createElement('suggested-articles-card')

    el.setAttribute('sug-src', card.img_uri);
    el.setAttribute('sug-href', card.link);
    el.setAttribute('sug-title', card.title);
    document.getElementById('suggestion-stories').appendChild(el);
  });
  
};



fetchmostread();

fetcharticles();

fetchsuggestionarticles();