document.querySelector('html').classList.add('js');

const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
  }
});
