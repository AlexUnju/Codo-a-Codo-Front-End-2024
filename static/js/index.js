var swiper = new Swiper(".mySwiper", {
  sliderPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoint: {
    991: {
      slidesPerView: 3,
    },
  },
});
