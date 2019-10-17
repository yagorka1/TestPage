document.querySelector('.team_message1').classList.add('hidd');
document.querySelector('.team_message2').classList.add('hidd');
document.querySelector('.team_message3').classList.add('hidd');
document.querySelector('.team_message4').classList.add('hidd');
document.querySelector('.team_message5').classList.add('hidd');
document.querySelector('.team_message6').classList.add('hidd');


document.querySelector('.team_photo1').onclick = function () {
  const b = document.querySelector('.team_message1');
  if (b.classList.contains('hidd')) b.classList.remove('hidd'); else b.classList.add('hidd');
};


document.querySelector('.team_photo2').onclick = function () {
  const b = document.querySelector('.team_message2');
  if (b.classList.contains('hidd')) b.classList.remove('hidd'); else b.classList.add('hidd');
};

document.querySelector('.team_photo3').onclick = function () {
  const b = document.querySelector('.team_message3');
  if (b.classList.contains('hidd')) b.classList.remove('hidd'); else b.classList.add('hidd');
};

document.querySelector('.team_photo4').onclick = function () {
  const b = document.querySelector('.team_message4');
  if (b.classList.contains('hidd')) b.classList.remove('hidd'); else b.classList.add('hidd');
};

document.querySelector('.team_photo5').onclick = function () {
  const b = document.querySelector('.team_message5');
  if (b.classList.contains('hidd')) b.classList.remove('hidd'); else b.classList.add('hidd');
};

document.querySelector('.team_photo6').onclick = function () {
  const b = document.querySelector('.team_message6');
  if (b.classList.contains('hidd')) b.classList.remove('hidd'); else b.classList.add('hidd');
};

const slides = document.querySelectorAll('#slides .slide');
const sq = document.querySelectorAll('.square1');
let currentSlide = 0;

document.getElementById('prev').onclick = function nextSlide() {
  slides[currentSlide].className = 'slide';
  sq[currentSlide].className = 'square1';
  currentSlide = (currentSlide - 1) % slides.length;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].className = 'slide showing';
  sq[currentSlide].className = 'square1 chosen_sq';
};

document.getElementById('next').onclick = function nextSlide() {
  slides[currentSlide].className = 'slide';
  sq[currentSlide].className = 'square1';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
  sq[currentSlide].className = 'square1 chosen_sq';
};

document.querySelector('.square6').onclick = function show() {
  document.querySelector('.square6').className = 'square_ch square square6';
  document.querySelector('.square7').className = 'square square7';
  document.querySelector('.square8').className = 'square square8';
  document.querySelector('.square9').className = 'square square9';
  document.querySelector('.a1').className = 'apple_img1 a1 ';
  document.querySelector('.a2').className = 'apple_img1 a2 apple_img4';
  document.querySelector('.a3').className = 'apple_img1 a3 apple_img4';
  document.querySelector('.a4').className = 'apple_img1 a4 apple_img4';
}
document.querySelector('.square7').onclick = function show() {
  document.querySelector('.square7').className = 'square_ch square square7';
  document.querySelector('.square6').className = 'square square6';
  document.querySelector('.square8').className = 'square square8';
  document.querySelector('.square9').className = 'square square9';
  document.querySelector('.a1').className = 'apple_img1 a1 apple_img4';
  document.querySelector('.a2').className = 'apple_img1 a2';
  document.querySelector('.a3').className = 'apple_img1 a3 apple_img4';
  document.querySelector('.a4').className = 'apple_img1 a4 apple_img4';
}
document.querySelector('.square8').onclick = function show() {
  document.querySelector('.square8').className = 'square_ch square square8';
  document.querySelector('.square7').className = 'square square7';
  document.querySelector('.square6').className = 'square square6';
  document.querySelector('.square9').className = 'square square9';
  document.querySelector('.a1').className = 'apple_img1 a1 apple_img4';
  document.querySelector('.a2').className = 'apple_img1 a2 apple_img4';
  document.querySelector('.a3').className = 'apple_img1 a3';
  document.querySelector('.a4').className = 'apple_img1 a4 apple_img4';
}
document.querySelector('.square9').onclick = function show() {
  document.querySelector('.square9').className = 'square_ch square square9';
  document.querySelector('.square7').className = 'square square7';
  document.querySelector('.square8').className = 'square square8';
  document.querySelector('.square6').className = 'square square6';
  document.querySelector('.a1').className = 'apple_img1 a1 apple_img4';
  document.querySelector('.a2').className = 'apple_img1 a2 apple_img4';
  document.querySelector('.a3').className = 'apple_img1 a3 apple_img4';
  document.querySelector('.a4').className = 'apple_img1 a4';
}
