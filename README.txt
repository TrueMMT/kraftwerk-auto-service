KRAFTWERK AUTO v8
FIXES:
- Hero Porsche is rendered only once.
- No duplicate background/overlay image.
- All subpages use the same css/style.css.
- Leistungen and Preise are fully styled.
- Relative paths are GitHub Pages compatible.

UPLOAD:
Delete/replace the old repository files and upload the CONTENTS of this ZIP to the repository root.
Do not upload the outer folder itself.

V10 CHANGES
- Header groups moved inward toward the center.
- Brand now has a small workshop/performance subtitle.
- Hero car has NO visible frame/card.
- Existing Porsche asset is used as one seamless hero background, no duplicate.
- Road/light streaks visually continue behind the text.
- Stronger visible red/orange sparks and cinematic effects.
- No generated replacement image was used for this revision.

V11:
- Much smaller/cleaner top navigation.
- Header spacing tightened.
- Car asset is seamlessly masked/cropped, no visible rectangle/card.
- Existing car made visually more aggressive through crop/contrast/saturation (no new image generated).
- Animated red sparks, glow and road/light streak effects added with CSS/JS.
- Effects extend behind the hero text.

V12:
- Only the hero car was changed.
- Replaced Porsche/Panamera hero with a different existing sports-car asset.
- No new image was generated.
- Transparent fade was baked into the PNG so there is no visible rectangular frame.
- Existing site layout, header, effects and subpages were left unchanged.

V15:
- Fixed hero first-load rendering issue.
- Text and car are forced above decorative layers immediately.
- Glow lines and spark animations remain.
- No visual redesign; only loading/stacking stability changes.

V16:
- Definitive fullscreen hero rendering fix.
- Car is now a real <img> element, not ::before.
- Removed paint containment conflict.
- Text and car render immediately at all viewport sizes.
- Existing glow lines and spark effects kept.

V17:
- Added cache-busting ?v=17.0 to CSS, JS and hero car asset.
- Added no-cache HTML meta tags.
- Hero remains visible without JavaScript.
- Added build-version meta tag for deployment verification.
- No design changes.

V18:
- Fixed Chrome first-tab repaint/GPU compositing issue.
- Removed heavy hero animation/filter/mask combinations.
- Removed JS particle layer.
- Kept static red ember effects and both glow lines.
- Hero text and car remain real DOM elements and render immediately.
- Cache-busting updated to v18.0.

V20:
- Permanent cache-busting uses NEW FILENAMES, not only ?v query parameters.
- style.css -> style-v20.css
- app.js -> app-v20.js
- sports-car-v12.png -> sports-car-v20.png
- All HTML pages point directly to the new filenames.
- Old versioned files removed from this package.
- No visual design changes from v19.
