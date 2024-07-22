

// const next = document.querySelector('.button__fb__next');
// const prev = document.querySelector('.button__fb__prev');
//const radioBtns = document.querySelectorAll('.product-radio_customr');
// const feedbacks = document.querySelectorAll('.slider__image');

// let currentSlide = 0;

// function showSlide(n) {
//   feedbacks.forEach((fb) => {
//     fb.style.display = 'none';
//   });
//   feedbacks[n].style.display = 'flex';
// }

// function prevSlide() {
//   if (currentSlide === 0) {
//     currentSlide = feedbacks.length - 1;
//   } else {
//     currentSlide--;
//   }
//   showSlide(currentSlide);
  
//   radioBtns[currentSlide].checked = true;
// }

// function nextSlide() {
//   if (currentSlide === feedbacks.length - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }
//   showSlide(currentSlide);
  
//   radioBtns[currentSlide].checked = true;
// }

// prev.addEventListener('click', prevSlide);
// next.addEventListener('click', nextSlide);

// radioBtns.forEach((radioBtn, index) => {
//   radioBtn.addEventListener('click', () => {
//     currentSlide = index;
//     showSlide(currentSlide);
//   });
// });

// showSlide(currentSlide);

// const  radioWrapper = document.querySelector(".product__slider__radio");
// const slides = document.querySelector(".product__slider-container");

// radioWrapper.addEventListener("click", e => {
//   if (e.target.nodeName === "input") {
//     Array.from(radioWrapper.children).forEach(item =>
//       item.classList.remove("active")
//     );
//     if (e.target.classList.contains("radio1")) {
//       slides.style.transform = "translateX(-0%)";
//       e.target.classList.add("active");
//     } else if (e.target.classList.contains("radio2")) {
//       slides.style.transform = "translateX(-20%)";
//       e.target.classList.add("active");
//     } else if (e.target.classList.contains('radio3')){
//       slides.style.transform = 'translatex(-40%)';
//       e.target.classList.add('active');
//     } else if (e.target.classList.contains('radio4')){
//       slides.style.transform = 'translatex(-60%)';
//       e.target.classList.add('active');
//     } else if (e.target.classList.contains('radio5')){
//       slides.style.transform = 'translatex(-80%)';
//       e.target.classList.add('active');
//     } 
//   }
// });

