{
  // Import this first...
  /* <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>; */
}

if (screen.width <= 768) {
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
}
