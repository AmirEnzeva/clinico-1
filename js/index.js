const swiperSlider = new Swiper('.swiper', {
    speed:800,
    loop:false,
    breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },

      },

      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

      pagination: {
        el: ".swiper-pagination",
      },

});