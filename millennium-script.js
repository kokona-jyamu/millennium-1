// Swiper 設定（手動）
const swiper = new Swiper(".menucard-slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0:   { slidesPerView: 1 }
  }
});


