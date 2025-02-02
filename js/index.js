const expertiseSwiper = new Swiper('.swiper-1', {
  speed: 1000,
  spaceBetween: 100,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    }
  },

  autoplay: {
    delay: 1000
  }

});

const doctorSwiper = new Swiper('.doctor-swiper', {
  speed: 1000,
  spaceBetween: 100,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,

    },
    // when window width is >= 640px
    980: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },

  autoplay: {
    delay: 1000,
    reverseDirection: true,
  },


});

const illSignSwiper = new Swiper('.swiper-2', {
  speed: 1000,
  spaceBetween: 100,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 4,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    }
  },

  autoplay: {
    delay: 1000,
  }

});
const commentsSwiper = new Swiper('.swiper-3', {
  speed: 1000,
  spaceBetween: 100,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 4,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    }
  },

  autoplay: {
    delay: 3000,
  }

});