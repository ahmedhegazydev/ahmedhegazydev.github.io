// Theme toggle, mobile menu and footer year. No dependencies.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    var forced = root.getAttribute('data-theme');
    if (forced === 'light' || forced === 'dark') return forced;
    return media.matches ? 'dark' : 'light';
  }

  function render() {
    var theme = currentTheme();
    root.setAttribute('data-theme-current', theme);
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* private mode: still works for this visit */ }
    render();
  });

  // Follow the system setting while the visitor hasn't picked a theme
  if (media.addEventListener) media.addEventListener('change', render);
  render();

  // Mobile menu
  var menuButton = document.querySelector('.menu-toggle');
  var links = document.getElementById('nav-links');

  function setMenu(open) {
    links.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuButton.addEventListener('click', function () {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      setMenu(false);
      menuButton.focus();
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
