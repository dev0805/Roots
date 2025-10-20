# ROOTS — Modern (UofG color) Single Page Site

## Overview
This version includes:
- University of Guelph inspired color scheme (red, black, gold).
- Hero collage (3-image stacked collage) and a masonry-style gallery (Unsplash links).
- Placeholder UofG SEDRD logo (assets/uoguelph-placeholder.svg) — replace with official logo later.
- Fully responsive, HTML/CSS/JS only (no frameworks).

## Files
- index.html
- styles.css
- script.js
- assets/uoguelph-placeholder.svg

## Notes
- Images are hotlinked to Unsplash for lightweight distribution. To self-host, download the images and replace the `src` attributes.
- Replace `assets/uoguelph-placeholder.svg` with the official SEDRD logo when available. The file path is used in header and footer.
- Contact form remains a placeholder — connect to a serverless endpoint for submissions (Netlify Forms, Formspree, etc.).

## Preview / Local testing
Open `index.html` in a modern browser. For local server: `python -m http.server 8000`

---
If you'd like, I can:
- Replace hotlinked images with locally included photos (bigger zip).
- Convert this into a Hugo/Eleventy starter.
- Tweak typography, spacing, or add subtle animations.
