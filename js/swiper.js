// ------a Way to resposive swiper with match media query--------

// const mql = window.matchMedia("(max-width: 992px)");

// const changePerView = (slide) => {
//   var swiper = new Swiper(".swiper", {
//     slidesPerView: slide,
//     autoplay: true,
//     loop: true,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// };


// const handleOnChange = (e) => {
//   if (mql.matches) {
//     changePerView(1);
//   } else {
//     changePerView(3);
//   }
// };

// handleOnChange();

// mql.onchange = (e) => {
//   handleOnChange(e);
// };


// =====
// ------a Way to resposive swiper with swiper breakpoints--------


var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

