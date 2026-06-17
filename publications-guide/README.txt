Publications List — Update Guide
=================================

All publications live in publications.html. This guide explains how to add,
edit, filter, and remove papers without touching any CSS or JavaScript.


ANATOMY OF A PUBLICATION CARD
-------------------------------
Each paper is a <div class="pub-card"> block:

  <div class="pub-card" data-topic="spatial">
    <span class="pub-card__journal">Nature Methods</span>
    <h3>Paper title here</h3>
    <p class="pub-card__authors">Smith J, <strong style="color:var(--teal-dark)">Lab Member</strong> et al. (2024)</p>
    <p class="pub-card__abstract">One or two sentence summary of the paper.</p>
    <div class="pub-card__links">
      <a href="https://doi.org/...">Paper</a>
      <a href="https://arxiv.org/abs/...">Preprint</a>
      <a href="https://github.com/...">Code</a>
      <a href="#">BibTeX</a>
    </div>
  </div>

Fields:
  data-topic          filter category (see TOPIC VALUES below)
  pub-card__journal   journal or conference name
  <h3>               full paper title
  pub-card__authors   author list — wrap lab members in <strong style="color:var(--teal-dark)">
  pub-card__abstract  one or two sentence plain-English summary
  pub-card__links     any combination of: Paper, Preprint, Code, Data, BibTeX


TOPIC VALUES (used by the filter buttons)
------------------------------------------
  data-topic="spatial"    Spatial Signaling
  data-topic="temporal"   Temporal Dynamics
  data-topic="info"       Information Theory
  data-topic="network"    Network Architecture

A paper can only have one topic. Choose the most relevant one.
If a paper spans multiple topics, pick the primary one.


ADDING A NEW PAPER
-------------------
1. Open publications.html.
2. Find the correct year group (<div class="year-group">).
   If the year does not exist yet, add a new group (see NEW YEAR below).
3. Paste a new pub-card block inside <div class="pub-list"> for that year.
4. Fill in the fields. Highlight lab members in the author list:
     <strong style="color:var(--teal-dark)">Author Name</strong>
5. Add real URLs for the Paper/DOI link and any available Code/Data links.
   Leave href="#" temporarily for links you don't have yet.


ADDING A NEW YEAR GROUP
------------------------
If you need to start a new year (e.g. 2025), add this block above the 2024
group inside the <div class="container"> section:

  <div class="year-group">
    <div class="year-heading">2025</div>
    <div class="pub-list">
      <!-- paste pub-card blocks here -->
    </div>
  </div>

Keep years in descending order (newest at the top).


MARKING EQUAL CONTRIBUTION
----------------------------
Add a dagger symbol after each equal-contribution author and a note:

  <p class="pub-card__authors">
    Smith J†, <strong style="color:var(--teal-dark)">Patel A†</strong>,
    <strong style="color:var(--teal-dark)">Lab PI</strong> (2024)
    · †equal contribution
  </p>


ADDING A PREPRINT (not yet peer-reviewed)
------------------------------------------
Use "bioRxiv" or "arXiv" as the journal name and add "(preprint)" after the year:

  <span class="pub-card__journal">bioRxiv</span>
  <p class="pub-card__authors">... (2025, preprint)</p>

Once accepted, update the journal name, year, and links accordingly.


ADDING A BibTeX LINK
---------------------
Option A — link directly to the journal's citation export:
  <a href="https://doi.org/10.1038/...">BibTeX</a>   (many journals offer export)

Option B — host a .bib file in this repo:
  1. Create assets/bibtex/smith2024.bib with the BibTeX entry.
  2. Link to it: <a href="assets/bibtex/smith2024.bib">BibTeX</a>

Option C — link to a Google Scholar or Semantic Scholar page where
  users can export the citation themselves.


REMOVING OR CORRECTING A PAPER
--------------------------------
- To correct a title, authors, or links: find the pub-card by searching
  (Ctrl+F) for the paper title and edit the relevant fields.
- To remove a paper: delete the entire <div class="pub-card"> ... </div> block.
  If that empties a year group, delete the whole year-group block too.


ADDING A NEW FILTER TOPIC
--------------------------
If research expands into a new area, add a filter button and update cards:

1. In publications.html, add a button to the .filter-bar:
     <button class="filter-btn" data-filter="methods">Methods</button>

2. Set data-topic="methods" on the relevant pub-card divs.

The JavaScript filter already handles any data-topic value automatically —
no JS changes needed.


QUICK CHECKLIST FOR EACH NEW PAPER
------------------------------------
  [ ] Correct data-topic set on the pub-card
  [ ] Journal name matches the published venue (not the preprint server)
  [ ] Lab members highlighted in teal in the author list
  [ ] DOI / Paper link filled in (not href="#")
  [ ] Code / Data links added if publicly available
  [ ] Abstract is plain English (1–2 sentences, no jargon abbreviations)
  [ ] Year group is correct and sorted newest-first
