

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



document.getElementById('currentYear').innerHTML = new Date().getFullYear();


