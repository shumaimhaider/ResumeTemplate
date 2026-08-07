# Resume Template

A pixel-close React recreation of the "Shumaim SSE Resume" PDF template.
Edit your info in **one file** and export a matching PDF straight from the browser.

## Edit your resume

Open `src/data/resumeData.js` — that's the only file you need to touch.

- Update `name`, `title`, `summary`, `contact`, `experience`, `education`,
  `skills`, `projects`, `languages`, and `interests`.
- Wrap any word/phrase in `**double asterisks**` to render it **bold**
  (matches the emphasis style used in the original resume's bullet points).
- To change the photo, replace `src/assets/profile.jpg` with your own image
  (keep the same filename, or update the `import profilePhoto from ...` line
  at the top of `resumeData.js`). Set `photo: null` to hide it entirely.
- `contact[].icon` accepts: `email`, `phone`, `location`, `website`,
  `linkedin`, `github`, `medium`.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Export to PDF

Click **Download PDF** in the top bar (or press `Ctrl/Cmd + P`). In the print
dialog:

- Destination: **Save as PDF**
- Paper size: **A4**
- Margins: **None** (the template already includes its own margins)
- Turn **off** "Headers and footers" for a clean look, or turn it **on** if
  you'd like the browser to add page numbers automatically.

The layout automatically reflows across multiple pages as you add or remove
content — job entries, education entries, and project entries are kept
intact and won't be awkwardly split across a page break.

## Build a static site

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/resumeData.js     <- edit this file with your info
  components/Resume.jsx  <- the resume layout (rarely needs changes)
  components/Resume.css  <- visual styling matching the source template
  components/icons.jsx   <- contact icon mapping
  utils/richText.jsx     <- parses **bold** markers in strings
  assets/profile.jpg     <- profile photo
```
