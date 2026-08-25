KRAFTWERK AUTO v24 - CHROME REPAINT FIX

This version targets the exact issue where the hero appears only after
switching tabs/windows or pressing Ctrl+F5.

Changes:
- Removed v23 double-load redirect.
- Preloads the hero car image.
- JavaScript is deferred.
- After the hero image is decoded/loaded, the page automatically forces
  a Chrome repaint, mimicking what happens when you switch tabs.
- A second repaint runs after window.load as a fallback.
- No intended visual redesign.

Upload ALL contents to the GitHub repository root.
