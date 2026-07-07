# M3BN group website

Website of the **Molecular Modeling of Soft and Nanostructured Materials** group
(INIFTA · UNLP · CONICET), hosted on GitHub Pages: https://m3bn.github.io

## Repository structure

```
m3bn.github.io/
├── index.html            # Home
├── research.html         # Research lines
├── members.html          # Members and alumni
├── publications.html     # Papers by year
├── conferences.html      # Talks and posters
├── software.html         # Group repositories
├── contact.html          # Contact and openings
├── assets/
│   ├── css/style.css     # Shared styles (palette and typography)
│   ├── js/main.js        # Mobile menu and active-tab highlight
│   └── img/
│       ├── members/      # Member photos (square, ~400×400 px)
│       └── tocs/         # TOC / graphical-abstract figures for papers
└── README.md
```

## Where to upload images

- **Member photos** → `assets/img/members/`. Use square images (~400×400 px)
  and simple lowercase filenames without spaces, e.g. `garcia-ana.jpg`.
- **Paper TOC figures** → `assets/img/tocs/`. Suggested naming:
  `YYYY-firstauthor.png`, e.g. `2026-garcia.png`. Keep them under ~200 KB
  (export at ~600 px wide) so the page loads fast.

## How to edit the content

Every page has `<!-- EDIT -->` comments marking what to replace.
The most common cases:

- **Add a publication**: in `publications.html`, copy an
  `<article class="publication with-toc">` block under the corresponding year.
  Point the `<img class="toc">` to the figure in `assets/img/tocs/`.
  If the paper has no TOC figure, use `class="publication"` and delete the `<img>` line.
- **Add a member**: in `members.html`, copy an `<article class="card member">`
  block and upload the photo to `assets/img/members/`.
- **Add a presentation**: in `conferences.html`, same as publications.
  Use `class="publication poster"` for posters.
- **Home-page news**: edit the "News" section of `index.html`.

⚠️ The navigation menu and the footer are repeated on every page.
If you add a new tab, update the `<nav>` in **all** HTML files.

## Changing colors or fonts

Everything is defined as variables at the top of `assets/css/style.css`
(`:root` section). Changing a color there changes it across the whole site.

## Publishing

GitHub Pages automatically publishes the `main` branch of this repository
(`m3bn.github.io`). Changes go live within 1–2 minutes.
Editing through pull requests is recommended so another member can review.
