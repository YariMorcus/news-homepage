document.querySelector('html').classList.add('js');

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
    this.classList.remove('news-nav__hamburger-button--is-active');
    body.classList.remove('disabled-scroll');
  } else {
    menu.classList.add('is-active');
    this.classList.add('news-nav__hamburger-button--is-active');
    body.classList.add('disabled-scroll');
    this.setAttribute('aria-expanded', 'true');
  }
});
