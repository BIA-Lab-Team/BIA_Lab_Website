Team Photos & Member Information
=================================

This folder holds team member photos. The team page is at team.html.


ADDING A PHOTO
--------------
1. Prepare your image:
     - Format  : JPEG or PNG
     - Size    : 400 × 400 px minimum (square crop works best)
     - Filename: use lowercase, hyphens for spaces — e.g. alex-rivera.jpg

2. Drop the file into this folder (assets/img/team/).

3. Open team.html and find the member's card. Replace the emoji placeholder:

   BEFORE:
     <div class="team-card__photo member-avatar">👤</div>

   AFTER:
     <div class="team-card__photo">
       <img src="assets/img/team/alex-rivera.jpg" alt="Prof. Alex Rivera">
     </div>

   For the PI card the selector is .pi-card__photo instead:

   BEFORE:
     <div class="pi-card__photo">👤</div>

   AFTER:
     <div class="pi-card__photo">
       <img src="assets/img/team/alex-rivera.jpg" alt="Prof. Alex Rivera">
     </div>


UPDATING A MEMBER'S NAME, ROLE, OR BIO
---------------------------------------
Find the member's <div class="team-card"> block in team.html and edit:

  <div class="team-card__name">Full Name</div>          ← display name
  <div class="team-card__role">Role · Year N</div>      ← role + year
  <p class="team-card__bio">One or two sentence bio.</p>

For the PI, the equivalent fields inside .pi-card__body are:

  <div class="pi-card__name">Prof. Alex J. Rivera</div>
  <div class="pi-card__affil">Title · Department · Institute</div>
  <p class="pi-card__bio">Longer bio paragraph.</p>


UPDATING SOCIAL / CONTACT LINKS
---------------------------------
Inside each .team-card__links (or .pi-card__links for the PI), swap
href="#" for the real URL:

  <a href="https://scholar.google.com/citations?user=XXXX">Scholar</a>
  <a href="https://github.com/username">GitHub</a>
  <a href="mailto:name@institution.edu">Email</a>


ADDING A NEW MEMBER
--------------------
1. Add their photo to this folder.
2. Copy an existing team-card block in team.html and paste it into the
   correct section (Postdocs or PhD Students).
3. Fill in name, role, bio, and links as described above.


MOVING A MEMBER TO ALUMNI
---------------------------
1. Delete their team-card block from the Postdocs or PhD Students section.
2. Add a row to the alumni <table> near the bottom of team.html:

   <tr>
     <td><strong>Dr. Full Name</strong></td>
     <td>Postdoc / PhD</td>
     <td>2021–2024</td>
     <td class="now">Current position, Institution</td>
   </tr>

3. You can keep or delete the photo file — it is no longer referenced.


FILE NAMING CONVENTIONS
------------------------
  alex-rivera.jpg        PI
  tomoko-watanabe.jpg    postdoc
  yuki-chen.jpg          PhD student
  lucas-ferreira.jpg     postdoc
  ...

Keep names lowercase with hyphens. Avoid spaces or special characters.
