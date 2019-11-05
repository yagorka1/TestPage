const GAP = 6; // it's used to get numb of slide
const STEP = 7;

const changeAppleSlide = (event) => {
  if (event.path[0].classList[0] !== 'square') {
    return;
  }

  const smallSquare = document.querySelectorAll('.square');
  smallSquare.forEach((item) => item.classList.remove('square_choose'));
  event.path[0].classList.add('square_choose');

  const slideNumber = event.path[0].classList[1].slice(GAP, STEP) - GAP;
  const slidesImg = document.querySelectorAll('.apple_img1');
  slidesImg.forEach((item) => item.classList.add('hide'));
  slidesImg[slideNumber].classList.remove('hide');
};

const bigSquare = document.querySelector('.choose_slides');
bigSquare.addEventListener('click', changeAppleSlide, true);
