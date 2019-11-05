const BLACK_COLOR = 'black';
const WHITE_COLOR = 'white';
const DEEP_SKY_BLUE_COLOR = '#71f5ea';
const OPACITY_BLACK = '1';
const OPACITY_BLUE = '0.7';
const CLASS_HIDE = 'hide';


document.addEventListener('click', (event) => {
  let pos1, pos2, pos3;
  if (event.srcElement.classList.contains('know_more')) {
    pos1 = 1;
    pos2 = 3;
    pos3 = 2;
  } else if (event.srcElement.classList.contains('arrow')) {
    // path.push(2, 4, 3);
    pos1 = 2;
    pos2 = 4;
    pos3 = 3;
  } else {
    return;
  }

  const arr = event.path[pos1].classList.value;
  const newStr = arr.replace(' ', '.');
  const elementsSelector = `.${newStr}`;
  const elements = document.querySelectorAll(elementsSelector);
  const path1 = event.path[pos2].classList[1];
  const path2 = event.path[pos3].className;
  const selector = `.${path1} .${path2}`;
  const change = document.querySelector(selector);

  const changeBlockStyle = (bgColor, color, opacity) => {
    change.style.backgroundColor = bgColor;
    change.style.color = color;
    change.style.opacity = opacity;
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const elem of elements) {
    if (elem.classList.contains(CLASS_HIDE)) {
      elem.classList.remove(CLASS_HIDE);
      changeBlockStyle(DEEP_SKY_BLUE_COLOR, BLACK_COLOR, OPACITY_BLACK);
    } else {
      elem.classList.add(CLASS_HIDE);
      changeBlockStyle(BLACK_COLOR, WHITE_COLOR, OPACITY_BLUE);
    }
  }
});
