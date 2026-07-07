// M3BN — script compartido por todas las páginas

// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const abierta = nav.classList.toggle('abierta');
    toggle.setAttribute('aria-expanded', abierta ? 'true' : 'false');
  });
}

// Marca automáticamente la pestaña activa según el archivo actual,
// así no hace falta editar la clase "activo" en cada página.
const actual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach((enlace) => {
  if (enlace.getAttribute('href') === actual) enlace.classList.add('activo');
});
