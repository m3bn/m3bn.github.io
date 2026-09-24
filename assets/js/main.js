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

// ---------- Filter publications by research line ----------
// Papers carry an invisible data-lines attribute (e.g. data-lines="line02").
// Opening publications.html?line=line02 shows only matching papers.
// Without the parameter, the page is left untouched.
const LINE_NAMES = {
  line01: 'Stimuli-responsive polymers and gels',
  line02: 'Protein and peptide adsorption at inorganic interfaces',
  line03: 'Peptides and nanoparticles at lipid membranes',
  line04: 'Porous materials for gas adsorption and separation',
  line05: 'Nanofluidics and ion transport',
};

const lineParam = new URLSearchParams(location.search).get('line');
const pubList = document.querySelector('.publication')?.parentElement;

if (lineParam && LINE_NAMES[lineParam] && pubList) {
  // Hide papers not tagged with this line
  document.querySelectorAll('.publication').forEach((pub) => {
    const lines = (pub.dataset.lines || '').split(/\s+/);
    if (!lines.includes(lineParam)) pub.hidden = true;
  });

  // Hide year headings left with no visible papers
  document.querySelectorAll('.year').forEach((year) => {
    let el = year.nextElementSibling;
    let visible = false;
    while (el && !el.classList.contains('year')) {
      if (el.classList.contains('publication') && !el.hidden) visible = true;
      el = el.nextElementSibling;
    }
    if (!visible) year.hidden = true;
  });

  // Small notice so visitors know the list is filtered
  const notice = document.createElement('p');
  notice.className = 'filter-notice';
  notice.innerHTML = `Showing publications on <strong>${LINE_NAMES[lineParam]}</strong> · <a href="publications.html">Show all</a>`;
  pubList.prepend(notice);
}
