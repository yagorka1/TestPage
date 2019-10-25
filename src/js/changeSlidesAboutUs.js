const changeAppleSlide = (event) => {
  event.path[0].classList.add('square_choose');
  const square = document.querySelectorAll('.square');

  for (let i = 0; i < square.length; i += 1) {
    square[i].classList.remove('square_choose');
  }
  event.path[0].classList.add('square_choose');

  const numSlide = event.path[0].classList[1].slice(6, 7) - 6;
  const slidesImg = document.querySelectorAll('.apple_img1');

  for (let i = 0; i < slidesImg.length; i += 1) {
    slidesImg[i].classList.add('hide');
  }
  slidesImg[numSlide].classList.remove('hide');
};

const square = document.querySelector('.choose_slides');
square.addEventListener('click', changeAppleSlide, true);
