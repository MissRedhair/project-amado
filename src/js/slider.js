// const next = document.querySelector('.button__next');
// const prev = document.querySelector('.button__prev');
// const slides = document.querySelectorAll('.slide');
// const radioBtns = document.getElementsByName('slider');


// const radioBtnsProd = document.getElementsByName('product-slider');
// const slidesP = document.querySelectorAll('.slider__image');

let currentSlide = 0;
// let currentSlideP = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'grid';
}
// function showSlideP(n) {
//   slidesP.forEach((slide) => {
//     slide.style.display = 'none';
//   });
//   slides[n].style.display = 'flex';
// }


function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
  
  radioBtns[currentSlide].checked = true;
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
  
  radioBtns[currentSlide].checked = true;
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

radioBtns.forEach((radioBtn, index) => {
  radioBtn.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// radioBtnsProd.forEach((radioBtn, index) => {
//   radioBtn.addEventListener('click', () => {
//     currentSlideP = index;
//     showSlideP(currentSlideP);
//   });
// });

showSlide(currentSlide);
// showSlideP(currentSlideP);

// const radio = document.querySelectorAll('.product-radio_custom');
// const slider = document.querySelectorAll('.slider__image');

// let curSlide = 0;

// function show(n) {
//   slider.forEach((slide) => {
//     slide.style.display = 'none';
//   });
//   slider[n].style.display = 'flex';
// }

// radio.forEach((radioBtn, index) => {
//   radioBtn.addEventListener('click', () => {
//     curSlide = index;
//     show(currentSlide);
//   });
// });

// show(curSlide);

