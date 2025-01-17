const swiperSlider = new Swiper('.swiper', {
    speed:800,
    loop:false,
    breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },

      },

});