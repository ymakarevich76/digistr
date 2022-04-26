const sliderTemplates = new Swiper('.templates__slider', {
  // loop: true,

  navigation: {
    nextEl: '.templates__slider-btn-prev',
    prevEl: '.templates__slider-btn-next',
  },

  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  freeMode: true,
  centeredSlides: true,

  breakpoints: {

    320: {
      freeMode: false,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },

    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      freeMode: true,
      centeredSlides: true,
      slidesPerView: 4,
      spaceBetween: 25,
    }
  }
});

const sliderResource = new Swiper('.resources__slider', {
  loop: true,

  navigation: {
    nextEl: '.resources__slider-btn-prev',
    prevEl: '.resources__slider-btn-next',
  },
  slidesPerView: 2,
  spaceBetween: 25,
  breakpoints: {

    567: {
      // freeMode: false,
      freeMode: true,
      centeredSlides: true,
      slidesPerView: 3
    },

    991: {
      freeMode: true,
      slidesPerView: 3
    },

    1200: {
      freeMode: true,
      slidesPerView: 4
    }
  }
})


const sliderProduct = new Swiper('.product__slider', {
  loop: true,

  navigation: {
    nextEl: '.product__slider-btn-prev',
    prevEl: '.product__slider-btn-next',
  },
  slidesPerView: 1
})
