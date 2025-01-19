const swiperSlider = new Swiper('.swiper', {
    speed:800,
    loop:false,
    breakpoints: {
        980: {
          slidesPerView: 4,
        },

      },

      autoplay: {
        delay: 2500,
      },


});