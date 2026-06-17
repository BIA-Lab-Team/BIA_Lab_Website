# CLAUDE.md — BIA Lab Website

## Project overview
Static academic website for the **Biological Information Architecture Lab**, a computational biology group studying biological signaling across space and time. No build step — plain HTML, CSS, and vanilla JS, deployed on GitHub Pages.

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
assets/css/main.css         Global styles & design tokens
assets/css/carousel.css     Carousel layout & animation
assets/js/carousel.js       Carousel logic (auto-advance, touch, dots)
assets/js/nav.js            Mobile nav + active link
README.md                   Deployment instructions
```

## Design system (CSS custom properties in main.css :root)
| Token | Value | Use |
|-------|-------|-----|
| `--navy` | `#0a1628` | Page backgrounds, nav, hero |
| `--navy-mid` | `#112240` | Carousel background |
| `--navy-light` | `#1d3a6e` | Card visuals, gradients |
| `--teal` | `#00c9a7` | Primary accent, CTA buttons |
| `--teal-dark` | `#00a589` | Links, tag text |
| `--white` | `#ffffff` | Content backgrounds |
| `--off-white` | `#f4f7fb` | Alternate sections |
| `--text` | `#1a2640` | Body text |
| `--muted` | `#5a6a85` | Secondary text, card descriptions |
| `--border` | `#d8e2f0` | Card borders, dividers |

## Key conventions
- **Nav is duplicated** in every HTML file — when adding/removing a page, update all 7 files.
- **Footer is duplicated** in every HTML file — same rule.
- **Carousel slides** live in `index.html`. The dot count (`.carousel__dot` buttons) must match the number of `.carousel__slide` divs — the JS derives everything from the DOM.
- **Publication filter** in `publications.html` uses `data-topic` attributes on `.pub-card` elements. Valid values: `spatial`, `temporal`, `info`, `network`.
- **News filter** in `news.html` uses `data-type` on `.news-entry`. Valid values: `paper`, `award`, `grant`, `member`, `talk`, `media`.
- **Team photos** — currently emoji placeholders inside `.member-avatar` divs. Replace with `<img src="assets/img/team/name.jpg" alt="...">` inside `.team-card__photo`.
- **External links** (GitHub, Scholar, Twitter, email) are `href="#"` placeholders — update to real URLs before going live.

## Deployment
Push to a GitHub repo named `<username>.github.io`; Pages activates automatically on the `main` branch. See `README.md` for full instructions.
