import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

export default new Swiper('.swiper-container', {
  spaceBetween: 65,
  slidesPerView: 3,
  speed: 1200,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

});

const scrolls = document.querySelectorAll('.fb__scroll');
 
scrolls.forEach((scroll)=>{
  scroll.addEventListener('click',()=>{
    scrolls.forEach((scroll) => {
      scroll.classList.remove('fb__scroll_active')
    }),
    scroll.classList.add('fb__scroll_active');
  })
});


new Swiper('.start-screen__slider', {
  spaceBetween: 65,
  slidesPerView: 1,
  speed: 1200,
  pagination: {
    el: '.slider-pagination-start-screen',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-start-screen-button-next',
      prevEl: '.swiper-start-screen-button-prev ',
  },
});

new Swiper('.swiper-container-product1 ', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:40,
  pagination: {
    el: '.swiper-pagination-product',
    clickable: true,
  },
});

new Swiper('.swiper-container-product2', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:40,
  pagination: {
    el: '.swiper-pagination-product',
    clickable: true,
  },
});

new Swiper('.swiper-container-product3', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:40,
  pagination: {
    el: '.swiper-pagination-product',
    clickable: true,
  },
});

new Swiper('.swiper-container-product4', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:40,
  pagination: {
    el: '.swiper-pagination-product',
    clickable: true,
  },
});

new Swiper('.swiper-container-additions', {
  slidesPerView: 4,
  speed: 1200,
  spaceBetween:20,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-addition-button-next',
    prevEl: '.swiper-addition-button-prev',
  },
  breakpoints: {
    
    // when window width is >= 1280px
    1280: {
      spaceBetween: 15
    },

  }
});

new Swiper('.addition1', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:10,
  pagination: {
    el: '.swiper-pagination-addition',
    clickable: true,
  },
});
new Swiper('.addition2', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:10,
  pagination: {
    el: '.swiper-pagination-addition',
    clickable: true,
  },
});
new Swiper('.addition3', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:10,
  pagination: {
    el: '.swiper-pagination-addition',
    clickable: true,
  },
});
new Swiper('.addition4', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:10,
  pagination: {
    el: '.swiper-pagination-addition',
    clickable: true,
  },
});
new Swiper('.addition5', {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween:10,
  pagination: {
    el: '.swiper-pagination-addition',
    clickable: true,
  },
});




