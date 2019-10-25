const changeAppleSlide = (event) => {
  if (event.path[0].classList[0] !== 'square') return;

  const square = document.querySelectorAll('.square');
  square.forEach((item) => item.classList.remove('square_choose'));
  event.path[0].classList.add('square_choose');

  const numSlide = event.path[0].classList[1].slice(6, 7) - 6;
  const slidesImg = document.querySelectorAll('.apple_img1');
  slidesImg.forEach((item) => item.classList.add('hide'));
  slidesImg[numSlide].classList.remove('hide');
};

const square = document.querySelector('.choose_slides');
square.addEventListener('click', changeAppleSlide, true);
