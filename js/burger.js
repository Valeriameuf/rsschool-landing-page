const burgerButton = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('header__nav--open');
  burgerButton.setAttribute('aria-expanded', isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.classList.contains('header__menu-link')) {
    nav.classList.remove('header__nav--open');
    burgerButton.setAttribute('aria-expanded', false);
  }
});
