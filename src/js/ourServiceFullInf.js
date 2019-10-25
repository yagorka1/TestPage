document.addEventListener('click', (event) => {
  const path = [];
  if (event.srcElement.classList.contains('know_more')) {
    path.push(1, 3, 2);
  } else if (event.srcElement.classList.contains('arrow')) {
    path.push(2, 4, 3);
  } else {
    return;
  }

  const arr = event.path[path[0]].classList.value;
  const newStr = arr.replace(' ', '.');
  const elementsSelector = `.${newStr}`;
  const elements = document.querySelectorAll(elementsSelector);
  const path1 = event.path[path[1]].classList[1];
  const path2 = event.path[path[2]].className;
  const selector = `.${path1} .${path2}`;
  const change = document.querySelector(selector);

  // const change = event.path[3];

  const changeBlockStyle = (bgColor, color, opacity) => {
    change.style.backgroundColor = bgColor;
    change.style.color = color;
    change.style.opacity = opacity;
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const elem of elements) {
    if (elem.classList.contains('hide')) {
      elem.classList.remove('hide');
      changeBlockStyle('#71f5ea', 'black', '1');
    } else {
      elem.classList.add('hide');
      changeBlockStyle('black', 'white', '0.7');
    }
  }
});
