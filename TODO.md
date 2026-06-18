# TODO

Items to complete before the site goes live, plus longer-term improvements.

## Before going live

### Content (replace placeholders)
- [x] Add real publication data to `publications.html` — 25 papers (2019–2026) from Google Scholar / OpenAlex
- [x] Add real research themes to `research.html` — 4 project cards reflecting actual work
- [x] Update homepage recent-work pub-cards (`index.html`) with 4 real high-impact papers
- [x] Create `papers.md` local bibliography (45 entries, source of truth)
- [ ] Replace all `href="#"` with real URLs — GitHub repos, Google Scholar, Twitter/X, DOI links for each paper
- [ ] Update PI / team details in `team.html` (name, affiliation, bio, photo, social links)
- [ ] Replace emoji placeholders in team cards with real photos (see `assets/img/team/README.txt`)
- [ ] Update `software.html` — replace placeholder tools (InfoSig, SpatialFlow…) with real software (MOSES, SPOT, u-segment3D, surface-guided computing, u-infotrace)
- [ ] Update carousel slides in `index.html` to reflect actual projects and papers
- [ ] Replace placeholder stats (12 members, 48 publications…) with real numbers in `index.html`
- [ ] Update contact emails (`apply@bialab.org`, `pi@bialab.org`) to real addresses
- [ ] Update `news.html` with real lab news and announcements
- [ ] Add real open positions or remove placeholder ones in `join.html`
- [ ] Add real banner images to `assets/img/banners/` (see `README.txt` inside for naming convention)
- [ ] Add DOIs and real paper URLs to all `href="#"` paper links in `publications.html` (see `papers.md` for DOIs already collected)

### Deployment
- [ ] Create GitHub repository (`<username>.github.io` or project repo)
- [ ] Push `main` branch to GitHub
- [ ] In repo Settings → Pages → Source → set to **GitHub Actions** (workflow is already committed)
- [ ] Confirm the Actions deploy run succeeds and the live URL resolves
- [ ] Test all internal nav links on the live URL
- [ ] (Optional) Add `CNAME` file and configure DNS for a custom domain
- [ ] Enable "Enforce HTTPS" in repo Settings → Pages

### QA
- [ ] Test on mobile (iPhone Safari, Android Chrome) — carousel swipe, nav burger, responsive layout
- [ ] Test all filter buttons (publications page topic filters, news page category filters)
- [ ] Verify logo renders correctly in nav (white background), footer (white pill on dark), and hero circle crop (index.html only)
- [ ] Fine-tune `object-position` on hero circle crop once real photos are in place — currently `center 35%` focuses on the "bia" graphic
- [ ] Run HTML through [validator.w3.org](https://validator.w3.org) to catch any markup errors
- [ ] Check colour contrast ratios meet WCAG AA — especially `#4878be` blue on white backgrounds

---

## Nice-to-have improvements

### Features
- [ ] Add a **search bar** across publications (client-side fuzzy search with Fuse.js or simple `includes()`)
- [ ] Add **BibTeX copy-to-clipboard** button on each pub-card
- [ ] Add **anchor links** to news items so individual items can be shared directly
- [ ] Add **Open Graph / Twitter Card meta tags** to all pages for richer social sharing previews
- [ ] Add `<link rel="canonical">` and a `sitemap.xml` for SEO

### Design
- [ ] Drop real **banner images** into `assets/img/banners/` and wire them into carousel slides (see `assets/img/banners/README.txt`)
- [ ] Add subtle **entrance animations** (fade-up on scroll) using Intersection Observer — no library needed
- [ ] Add a **"Back to top"** button that appears after scrolling down
- [ ] Consider using `--purple` (`#7b65b2`) and `--green-acc` (`#3fa86a`) from the design token palette as accent colours on specific sections (e.g. award news badges, software status badges) to bring in more of the logo's colour range

### Infrastructure
- [ ] Add `robots.txt` and a custom `404.html` with the site nav (GitHub Pages serves a bare default 404)
- [ ] Set up **Google Analytics** or a privacy-respecting alternative (Plausible, Fathom) by adding the tracking snippet to each `<head>`
- [ ] Consider a lightweight **CMS layer** (Netlify CMS, Tina CMS, or a JSON data file + small build script) so non-technical lab members can add publications and news without editing HTML

### Accessibility
- [ ] Add `aria-live` region to carousel so screen readers announce slide changes
- [ ] Audit keyboard navigation through the carousel controls and filter buttons
- [ ] Add a `skip-to-main` link at the top of each page
