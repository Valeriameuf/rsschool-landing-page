var button = document.querySelector('.header__theme-toggle');
var theme = 'light';

try {
  var savedTheme = localStorage.getItem('theme');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  theme = savedTheme || (systemDark ? 'dark' : 'light');
} catch (error) {
  theme = 'light';
}

function setTheme(newTheme) {
  theme = newTheme;
  document.documentElement.dataset.theme = theme;
  button.setAttribute('aria-pressed', theme === 'dark');
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {}
}

setTheme(theme);

button.addEventListener('click', function () {
  setTheme(theme === 'dark' ? 'light' : 'dark');
});
