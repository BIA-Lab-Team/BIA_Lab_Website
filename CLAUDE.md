# CLAUDE.md — BIA Lab Website

## Project overview
Static academic website for the **Biological Information Architecture Lab**, a computational biology group studying biological signaling across space and time. No build step — plain HTML, CSS, and vanilla JS, deployed on GitHub Pages via a GitHub Actions workflow.

## Stack
- **HTML** — one file per page, no templating engine. Nav and footer are duplicated across pages.
- **CSS** — two files: `assets/css/main.css` (global design system) and `assets/css/carousel.css` (carousel-specific styles). CSS custom properties defined in `:root` in `main.css`.
- **JS** — two files: `assets/js/carousel.js` (self-invoking, data-carousel attribute-driven) and `assets/js/nav.js` (mobile burger toggle + active link highlight).
- **Fonts** — Inter from Google Fonts, loaded in every HTML `<head>`.
- **No dependencies, no npm, no build pipeline.**

## File map
```
index.html          Landing page
research.html       Project cards
publications.html   Filterable paper list
software.html       Open-source tools
news.html           News timeline
team.html           PI + members + alumni
join.html           Positions + contact form
assets/css/main.css             Global styles & design tokens
assets/css/carousel.css         Carousel layout & animation
assets/js/carousel.js           Carousel logic (auto-advance, touch, dots)
assets/js/nav.js                Mobile nav + active link
assets/img/bia_lab_logo.png     Official lab logo (used in nav + footer)
assets/img/logo.svg             SVG placeholder logo (BIA monogram — can be discarded)
assets/img/team/                Team member photos (see README.txt inside)
assets/img/banners/             Carousel slide images (see README.txt inside)
.github/workflows/pages.yml     GitHub Actions — auto-deploy to Pages on push to main
publications-guide/README.txt   Guide for updating the publications list
README.md                       Deployment instructions
CLAUDE.md                       This file
SUMMARY.md                      Human-readable project summary
TODO.md                         Outstanding tasks
```

## Design system (CSS custom properties in main.css :root)
Palette derived from the BIA Lab logo — navy letterforms + blue/purple/green network cube nodes.

| Token | Value | Use |
|-------|-------|-----|
| `--navy` | `#1e2d4f` | Footer, stats bar, dark cards, logo letterform match |
| `--navy-mid` | `#263a6a` | Carousel background, card gradients |
| `--navy-light` | `#3a5698` | Card visual gradients, btn-outline-dark hover |
| `--teal` | `#4878be` | Primary accent (network cube blue) — buttons, progress bar, active dots |
| `--teal-dark` | `#3464a8` | Links, hover states, section labels |
| `--purple` | `#7b65b2` | Secondary accent (cube purple node) — available for future use |
| `--green-acc` | `#3fa86a` | Tertiary accent (cube green node) — available for future use |
| `--white` | `#ffffff` | Content backgrounds, nav background |
| `--off-white` | `#f0f4fa` | Alternate section backgrounds |
| `--text` | `#1e2d4f` | Body text |
| `--muted` | `#627394` | Secondary text, card descriptions |
| `--border` | `#c9d6e8` | Card borders, dividers, nav bottom border |

## Logo usage
- **Nav** — `<img src="assets/img/bia_lab_logo.png" alt="BIA Lab" class="nav__logo-img">` inside `.nav__logo` anchor. The white nav background means the logo shows as-is.
- **Footer** — same image with class `footer__logo-img`, which applies a white background pill (`background: white; border-radius: 8px; padding: 5px 10px`) so the logo reads on the dark footer.
- **Hero (index.html only)** — large circular crop, 360×360 px, inside `.hero__logo` div in the right column of the two-column `.hero__content` grid. CSS: `border-radius: 50%; object-fit: cover; object-position: center 35%` to focus the crop on the "bia" graphic rather than the label text below. `padding-top: 3.25rem` on `.hero__logo` offsets the circle so its top aligns with the h1 and its bottom reaches the CTA buttons.

## Key conventions
- **Nav is duplicated** in every HTML file — when adding/removing a page, update all 7 files.
- **Footer is duplicated** in every HTML file — same rule.
- **Carousel slides** live in `index.html`. The dot count (`.carousel__dot` buttons) must match the number of `.carousel__slide` divs — the JS derives everything from the DOM.
- **Publication filter** in `publications.html` uses `data-topic` attributes on `.pub-card` elements. Valid values: `spatial`, `temporal`, `info`, `network`.
- **News filter** in `news.html` uses `data-type` on `.news-entry`. Valid values: `paper`, `award`, `grant`, `member`, `talk`, `media`.
- **Team photos** — currently emoji placeholders inside `.member-avatar` divs. Replace with `<img src="assets/img/team/name.jpg" alt="...">` inside `.team-card__photo`. See `assets/img/team/README.txt` for full instructions.
- **External links** (GitHub, Scholar, Twitter, email) are `href="#"` placeholders — update to real URLs before going live.
- **SVG illustration colours** in `index.html` (hero background + carousel slides) are hardcoded to `#4878be` (the primary blue accent). If the accent colour is ever changed, search-replace that hex across `index.html` and `research.html`.
- **Hero two-column layout** — `.hero__content` uses `display: grid; grid-template-columns: 1fr auto; align-items: start`. Left column is `.hero__body` (all text + stats); right column is `.hero__logo` (circular logo image). On screens ≤768 px the right column is hidden (`display: none`).

## Deployment
Automated via `.github/workflows/pages.yml` — push to `main` and GitHub Actions deploys to Pages automatically. In the repo, go to **Settings → Pages → Source → GitHub Actions** to activate. See `README.md` for full setup instructions.
