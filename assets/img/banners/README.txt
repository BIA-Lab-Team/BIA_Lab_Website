Carousel Banner Images
======================

Drop your slide images into this folder. The carousel in index.html has 4 slides.

Recommended spec
----------------
  Format : JPEG (photos) or PNG (illustrations)
  Size   : 1200 × 600 px minimum (2x / retina: 2400 × 1200 px)
  Naming : slide-1.jpg, slide-2.jpg, slide-3.jpg, slide-4.jpg

Current slides (see index.html .carousel__slide divs)
------------------------------------------------------
  slide-1  SpatialFlow paper (Nature Methods 2024) — tissue/spatial transcriptomics image
  slide-2  Segmentation clock project — live imaging / oscillation figure
  slide-3  InfoSig software release — information-theory diagram or code screenshot
  slide-4  ERC grant announcement — embryo / gradient figure

To use an image in a slide
---------------------------
Add an <img> inside .carousel__slide-visual, e.g.:

  <div class="carousel__slide-visual">
    <img src="assets/img/banners/slide-1.jpg" alt="SpatialFlow tissue map" style="width:100%;height:100%;object-fit:cover;">
  </div>

Remove or keep the SVG illustration alongside the photo as you prefer.
