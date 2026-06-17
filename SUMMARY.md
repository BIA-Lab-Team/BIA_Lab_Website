# Website Summary

## What was built
A complete, production-ready static academic website for the **Biological Information Architecture (BIA) Lab** — a computational biology group studying how biological signaling is organised across space and time. The site is plain HTML/CSS/JS with no build step, designed for immediate deployment on GitHub Pages.

## Pages

### `index.html` — Landing page
- Full-viewport **hero** with animated SVG node-graph background on a soft blue-grey gradient, lab tagline, and CTA buttons
- **4-slide auto-advancing carousel** (5 s interval, pause on hover, touch/swipe support) showcasing a recent paper, an active project, a software release, and a grant award
- **Research themes strip** — four dark navy cards covering Spatial Signaling, Temporal Dynamics, Information Theory, and Network Architecture
- **Stats bar** — navy band with key lab metrics (publications, members, tools, grants, collaborators)
- **Recent publications** — 4 pub-cards with journal badges, authors, abstracts, and action links
- **News feed** — 3 most recent items with date chips
- Sticky nav + full footer on every page

### `research.html` — Projects
Four alternating full-width project cards (left/right layout), each with an inline SVG data figure, methods tags, and links to related papers and tools.

### `publications.html` — Publications
Year-grouped paper list (2024 → 2022) with topic filter buttons (Spatial, Temporal, Information Theory, Network). Filter is client-side JS — no page reload. Each card has journal badge, authors (lab members highlighted in blue), abstract, and links (Paper / Code / BibTeX).

### `software.html` — Open-source Tools
Five tool cards (InfoSig, SpatialFlow, ClockSDE, NetMotif, GradientFit) each with: tagline, description, language/license/status badges, a syntax-highlighted code snippet, and links to GitHub / Docs / PyPI / cite paper.

### `news.html` — News
Vertical timeline with category filter buttons (Papers, Awards, Grants, New Members, Talks, Media). 10 items spanning 2023–2024. Each entry has a date column, coloured category badge, title, description, and optional "read more" link.

### `team.html` — Team
- Prominent **PI card** (full bio, research interests, social links)
- **Postdoc grid** (3 cards)
- **PhD student grid** (8 cards)
- **Alumni table** with current positions

### `join.html` — Join Us
- 4 position cards (3 open, 1 upcoming) with status badges, description, contract details, and apply buttons
- Lab values grid (6 cards: collaboration, inclusion, open science, career development, intellectual freedom, work–life balance)
- Step-by-step application guide
- Contact form (mailto action, no backend required)

## Design system
Palette derived from the **BIA Lab logo** — dark navy (`#1e2d4f`) from the logo letterforms, medium blue (`#4878be`) from the network cube, with soft purple (`#7b65b2`) and green (`#3fa86a`) as secondary accents. White nav and light blue-grey hero give the site a clean, lighter feel consistent with the logo's aesthetic. Inter typeface. Responsive grid using CSS Grid and Flexbox. Mobile nav with burger menu.

All interactive filters and carousel logic are in ~80 lines of vanilla JS across two files.

## Assets & documentation
| Path | Purpose |
|------|---------|
| `assets/img/bia_lab_logo.png` | Official lab logo — used in nav (white bg) and footer (white pill) |
| `assets/img/logo.svg` | SVG placeholder monogram (can be discarded once logo is in use) |
| `assets/img/team/` | Team photos — see `README.txt` inside for how to add/update |
| `assets/img/banners/` | Carousel slide images — see `README.txt` inside for naming/sizing |
| `publications-guide/README.txt` | How to add, edit, filter, and remove publications |
| `.github/workflows/pages.yml` | GitHub Actions workflow — auto-deploys to Pages on push to `main` |

## Deployment
Git repository initialised, all files committed. Push to a GitHub repository, enable GitHub Actions as the Pages source in repo Settings, and the site deploys automatically on every push to `main`.
