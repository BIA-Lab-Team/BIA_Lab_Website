# TODO

Items to complete before the site goes live, plus longer-term improvements.

## Before going live

### Content (replace placeholders)
- [ ] Replace all `href="#"` with real URLs — GitHub org, Google Scholar, Twitter/X, LinkedIn
- [ ] Update PI name, affiliation, email, and bio in `team.html` and all footers
- [ ] Replace emoji placeholders in team cards with real photos (`assets/img/team/*.jpg`)
- [ ] Add real publication data to `publications.html` (titles, authors, DOI/PDF links, BibTeX)
- [ ] Update carousel slides in `index.html` to reflect actual projects and papers
- [ ] Add real software repository URLs and PyPI links in `software.html`
- [ ] Replace placeholder stats (12 members, 48 publications…) with real numbers in `index.html`
- [ ] Update contact email (`apply@bialab.org`, `pi@bialab.org`) to real addresses
- [ ] Add real open positions or remove the placeholder ones in `join.html`

### Deployment
- [ ] Create GitHub repository (`<username>.github.io` or project repo)
- [ ] Push `main` branch and confirm GitHub Pages is active
- [ ] Verify live URL resolves and all internal links work
- [ ] (Optional) Add `CNAME` file and configure DNS for a custom domain
- [ ] Enable "Enforce HTTPS" in repo Settings → Pages

### QA
- [ ] Test on mobile (iPhone Safari, Android Chrome) — carousel swipe, nav burger, responsive layout
- [ ] Test all filter buttons (publications page, news page)
- [ ] Check all nav links point to correct pages on the live URL
- [ ] Run HTML through [validator.w3.org](https://validator.w3.org) to catch any markup errors
- [ ] Check colour contrast ratios meet WCAG AA (teal-on-navy sections)

---

## Nice-to-have improvements

### Features
- [ ] Add a **search bar** across publications (client-side fuzzy search with Fuse.js or simple `includes()`)
- [ ] Add **BibTeX copy-to-clipboard** button on each pub-card
- [ ] Add a **dark/light mode toggle** (CSS custom properties make this straightforward)
- [ ] Add **anchor links** to news items so individual items can be shared
- [ ] Add **Open Graph / Twitter Card meta tags** to all pages for richer social sharing previews
- [ ] Add `<link rel="canonical">` and a `sitemap.xml` for SEO

### Design
- [ ] Add real **banner images** for carousel slides (replace SVG illustrations with photographs or rendered figures)
- [ ] Add a **lab logo SVG** to replace the 🧬 emoji in the nav
- [ ] Add subtle **entrance animations** (fade-up on scroll) using Intersection Observer — no library needed
- [ ] Add a **"Back to top"** button that appears after scrolling down

### Infrastructure
- [ ] Add a **GitHub Actions workflow** (`.github/workflows/pages.yml`) for automated deployment with any future preprocessing (e.g. minification)
- [ ] Add `robots.txt` and `404.html` (GitHub Pages serves a default 404 — a custom one with the lab nav is friendlier)
- [ ] Set up **Google Analytics** or a privacy-respecting alternative (Plausible, Fathom) by adding the tracking snippet to each `<head>`
- [ ] Consider a lightweight **CMS layer** (Netlify CMS, Tina CMS, or a JSON data file read by a small build script) so non-technical lab members can add publications and news without editing HTML

### Accessibility
- [ ] Add `aria-live` region to carousel so screen readers announce slide changes
- [ ] Audit keyboard navigation through the carousel controls and filter buttons
- [ ] Add `skip-to-main` link at the top of each page
