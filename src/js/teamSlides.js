const slides = document.querySelectorAll('#slides .slide');
const sq = document.querySelectorAll('.square1');
let currentSlide = 0;

const changePeoplesSlide = (direction) => {
  slides[currentSlide].className = 'slide';
  sq[currentSlide].classList.remove('chosen_sq');
  currentSlide = (currentSlide + direction) % slides.length;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].className = 'slide showing';
  sq[currentSlide].classList.add('chosen_sq');
};

document.getElementById('prev').onclick = () => {
  changePeoplesSlide(-1);
};

document.getElementById('next').onclick = () => {
  changePeoplesSlide(1);
};

const changePeopleSlide = (event) => {

  const id = String(event.path[0].classList[1]);
  const numSlide = id.slice(2, 3) - 1;
  slides[currentSlide].className = 'slide';
  document.querySelectorAll('.square1')[currentSlide].classList.remove('chosen_sq');
  currentSlide = numSlide;
  slides[currentSlide].className = 'slide showing';

  const sss = event.path[0].classList[1];
  document.querySelector(`.${sss}`).classList.add('chosen_sq');
  event.path[0].classList.add('chosen_sq');
};

const square1 = document.querySelector('.choose_slides1');
square1.addEventListener('click', changePeopleSlide, true);
