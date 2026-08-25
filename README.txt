KRAFTWERK AUTO v23 - AUTOMATIC CACHE FIX

What changed:
- No visual redesign.
- First page open automatically adds ?build=23 to the URL.
- This forces Chrome/GitHub Pages to fetch the current HTML instead of a stale cached document.
- Existing query parameters such as utm_source are preserved.
- Internal navigation carries build=23 automatically.
- CSS, JS and car image use fresh v23 filenames.

IMPORTANT:
Upload ALL contents of this ZIP to the repository root.
After v23 has been uploaded, normal visitors should not need Ctrl+F5.
