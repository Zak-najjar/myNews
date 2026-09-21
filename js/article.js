import './articlePage/config.js';
import './articlePage/sideMostRead.js';
import './articlePage/articles.js';
import './articlePage/suggestedArticle.js';
import './articlePage/commentsArticle.js';
import './articlePage/relatedArticle.js';

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (this.scrollY > 100) {
    navbar.classList.add("navbar-small");
  } else {
    navbar.classList.remove("navbar-small");
  }
});
