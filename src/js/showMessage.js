const showMessageOfTeam = (event) => {
  const className = String(event.path[0].childNodes[1].classList[1]);
  if (className.indexOf('team_message')) return;
  const divTeam = document.querySelector(`.${className}`);
  // eslint-disable-next-line no-unused-expressions
  divTeam.classList.contains('hidden') ? divTeam.classList.remove('hidden') : divTeam.classList.add('hidden');
};

const el = document.querySelector('.team');
el.addEventListener('click', showMessageOfTeam, true);
