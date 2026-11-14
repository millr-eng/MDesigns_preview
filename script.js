// Shared website behaviour: mobile menu and copyright year.
const button = document.querySelector('.menu');
const nav = document.querySelector('.nav');

if (button && nav) {
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  };

  button.addEventListener('click', () => {
    setMenu(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  const mobile = window.matchMedia('(max-width: 650px)');
  mobile.addEventListener('change', () => setMenu(false));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
