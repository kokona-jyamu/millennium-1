// Swiper 設定（手動）
const swiper = new Swiper(".swiper-menucard-slider", {
  slidesPerView: 3,
  spaceBetween: 4,
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

//mokumoku-calendarについて
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("go-calendar");

  button.addEventListener("click", () => {
    document.getElementById("calendar").scrollIntoView({
      behavior: "smooth"
    });
  });
});



