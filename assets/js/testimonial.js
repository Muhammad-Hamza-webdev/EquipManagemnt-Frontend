// First Swiper (mySwiper)
var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".mySwiper-next", // Unique selector
    prevEl: ".mySwiper-prev", // Unique selector
  },
  breakpoints: {
    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1140: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    880: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

// Second Swiper (categorySwiper with 4 slides)
var swiper2 = new Swiper(".categorySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".categorySwiper-next", // Unique selector
    prevEl: ".categorySwiper-prev", // Unique selector
  },
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    880: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
