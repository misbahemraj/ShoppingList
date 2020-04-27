let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  if (e.target.tagName == 'INPUT') {
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});