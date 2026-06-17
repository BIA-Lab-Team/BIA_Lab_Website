# Website Summary

## What was built
A complete, production-ready static academic website for the **Biological Information Architecture (BIA) Lab** — a computational biology group studying how biological signaling is organised across space and time. The site is plain HTML/CSS/JS with no build step, designed for immediate deployment on GitHub Pages.

## Pages

### `index.html` — Landing page
- Full-viewport **hero** with animated SVG node-graph background, lab tagline, and CTA buttons
- **4-slide auto-advancing carousel** (5 s interval, pause on hover, touch/swipe support) showcasing a recent paper, an active project, a software release, and a grant award
- **Research themes strip** — four dark cards covering Spatial Signaling, Temporal Dynamics, Information Theory, and Network Architecture
- **Stats bar** — navy band with animated counters (publications, members, tools, grants, collaborators)
- **Recent publications** — 4 pub-cards with journal badges, authors, abstracts, and action links
- **News feed** — 3 most recent items with date chips
- Sticky nav + full footer on every page

### `research.html` — Projects
Four alternating full-width project cards (left/right layout), each with an inline SVG data figure, methods tags, and links to related papers and tools.

### `publications.html` — Publications
Year-grouped paper list (2024 → 2022) with topic filter buttons (Spatial, Temporal, Information Theory, Network). Filter is client-side JS — no page reload. Each card has journal badge, authors (lab members highlighted), abstract, and links (Paper / Code / BibTeX).

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
Deep navy (`#0a1628`) primary, electric teal (`#00c9a7`) accent, clean white content backgrounds. Inter typeface. Responsive grid using CSS Grid and Flexbox. Mobile nav with burger menu. All interactive filters and carousel logic in ~80 lines of vanilla JS across two files.

## Deployment
Git repository initialised, all files committed. Push to a `<username>.github.io` GitHub repository and Pages goes live automatically in under a minute.
