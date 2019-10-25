const showMessageOfTeam = (event) => {
  const className = String(event.path[0].childNodes[1].classList[1]);
  if (className.indexOf('team_message')) return;
  const divTeam = document.querySelector(`.${className}`);
  divTeam.classList.contains('hidd') ? divTeam.classList.remove('hidd') : divTeam.classList.add('hidd');
};

const el = document.querySelector('.team');
el.addEventListener('click', showMessageOfTeam, true);
