// M3BN — shared script for all pages

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Automatically highlight the active tab based on the current file,
// so there is no need to edit an "active" class on every page.
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach((link) => {
  if (link.getAttribute('href') === current) link.classList.add('active');
});
