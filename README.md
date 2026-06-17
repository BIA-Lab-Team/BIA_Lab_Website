# BIA Lab Website

Academic website for the **Biological Information Architecture Lab** — a computational biology lab studying how biological signaling is organized across space and time.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with hero, sliding carousel, research themes, recent publications, news |
| `research.html` | In-depth project cards for each research area |
| `publications.html` | Filterable paper list grouped by year |
| `software.html` | Open-source tools with install snippets and links |
| `news.html` | Filterable chronological news timeline |
| `team.html` | PI profile, postdocs, PhD students, alumni table |
| `join.html` | Open positions, lab values, how to apply, contact form |

## Deploying to GitHub Pages

### Option A — User/Organisation site (recommended)

1. Create a GitHub repository named **`<username>.github.io`** (e.g. `bialab.github.io`)
2. Push this directory to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. GitHub Pages is enabled automatically for `*.github.io` repos — no extra configuration needed.
4. Site is live at `https://<username>.github.io` within ~60 seconds.

### Option B — Project site

1. Create any GitHub repository (e.g. `bialab/website`)
2. Push files to `main`
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Site is live at `https://bialab.github.io/website/`

### Custom domain (optional)

1. Add a `CNAME` file to the repo root containing your domain (e.g. `bialab.org`)
2. Point your DNS `A` records to GitHub's IPs (see GitHub docs) or add a `CNAME` DNS record
3. Enable "Enforce HTTPS" in repo Settings → Pages

## Customising Content

- **Colours / fonts** — edit CSS custom properties at the top of `assets/css/main.css`
- **Lab name / tagline** — search-replace "BIA Lab" and the tagline across all HTML files
- **PI details** — edit the PI card in `team.html` and update email/social links in all footers
- **Carousel slides** — add/remove `.carousel__slide` divs in `index.html`; update dot count to match
- **Publications** — add `.pub-card` blocks in `publications.html`; set `data-topic` for filter to work
- **Team photos** — replace the emoji placeholder in `.member-avatar` with an `<img>` tag
