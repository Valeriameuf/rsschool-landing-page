const button = document.querySelector('.header__theme-toggle');
let theme = localStorage.getItem('theme') || 'light';

const setTheme = (newTheme) => {
  theme = newTheme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  button.setAttribute('aria-pressed', theme === 'dark');
};

setTheme(theme);

button.addEventListener('click', () => {
  if (theme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});
