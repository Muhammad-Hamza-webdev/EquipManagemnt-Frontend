document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    focus: "center",
    pagination: false,
    arrows: true,
    autoplay: false,
    drag: true,
    breakpoints: {
      1366: { perPage: 3 },
      1200: { perPage: 3 },
      1140: { perPage: 3 },
      1024: { perPage: 3 },
      880: { perPage: 1 },
      768: { perPage: 1 },
      550: { perPage: 1 },
    },
  });

  splide.mount();
});
document.addEventListener("DOMContentLoaded", function () {
  const splides = new Splide(".carousel-1", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "2rem",
    focus: "center",
    pagination: false,
    arrows: true,
    autoplay: false,
    drag: true,
    breakpoints: {
      1366: { perPage: 3 },
      1200: { perPage: 3 },
      1140: { perPage: 3 },
      1024: { perPage: 3 },
      880: { perPage: 1 },
      768: { perPage: 1 },
      550: { perPage: 1 },
    },
  });

  splides.mount();
});
