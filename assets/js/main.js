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

// ---------- Filter publications (by research line or by author) ----------
// Papers carry an invisible data-lines attribute (e.g. data-lines="line02").
// Opening publications.html?line=line02 shows only matching papers.
// Research line: publications.html?line=line02   -> papers tagged data-lines="line02"
// Author:        publications.html?author=Longo  -> papers whose author list contains
//                that surname (ignores accents and upper/lower case, no tags needed)
// Without parameters, the page is left untouched.
const LINE_NAMES = {
  line01: 'Stimuli-responsive polymers and gels',
  line02: 'Protein and peptide adsorption at inorganic interfaces',
  line03: 'Peptides and nanoparticles at lipid membranes',
  line04: 'Porous materials for gas adsorption and separation',
  line05: 'Nanofluidics and ion transport',
};

const params = new URLSearchParams(location.search);
const lineParam = params.get('line');
const authorParam = params.get('author');
const pubList = document.querySelector('.publication')?.parentElement;

// Removes accents and case, so "Pérez-Chávez" also matches "perez-chavez"
const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function filterPublications(keep, prefix, label) {
  // Hide papers that don't match
  document.querySelectorAll('.publication').forEach((pub) => {
    if (!keep(pub)) pub.hidden = true;
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

  // Notice with a "Show all" link
  const notice = document.createElement('p');
  notice.className = 'filter-notice';
  const strong = document.createElement('strong');
  strong.textContent = label;
  const showAll = document.createElement('a');
  showAll.href = 'publications.html';
  showAll.textContent = 'Show all';
  //notice.append(`Showing publications ${prefix} `, strong, ' · ', showAll);
  notice.append(`${prefix} `, strong, ' · ', showAll);
  pubList.prepend(notice);
}

if (pubList && lineParam && LINE_NAMES[lineParam]) {
  filterPublications(
    (pub) => (pub.dataset.lines || '').split(/\s+/).includes(lineParam),
    //'on', LINE_NAMES[lineParam]
    'Showing publications on', LINE_NAMES[lineParam]
  );
} else if (pubList && authorParam) {
  const target = normalize(authorParam);
  filterPublications(
    (pub) => normalize(pub.querySelector('.authors')?.textContent || '').includes(target),
    //'by', authorParam
    'Showing M3BN publications co-authored by', authorParam
  );
}

