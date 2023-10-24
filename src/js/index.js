document.querySelector('html').classList.add('js');

const body = document.querySelector('body');
const toggle = document.getElementById('js-toggle');
const menu = document.getElementById('js-menu');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
    this.classList.remove('news-nav__hamburger-button--is-active');
    overlay.classList.remove('overlay--is-active');
  } else {
    menu.classList.add('is-active');
    this.classList.add('news-nav__hamburger-button--is-active');
    this.setAttribute('aria-expanded', 'true');
    overlay.classList.add('overlay--is-active');
  }
});
