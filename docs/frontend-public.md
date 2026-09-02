# public/

Static assets served as-is at the site root (not processed by Vite's bundler). Referenced with root-relative paths like `/imgs/logo.svg`.

- **`imgs/`** — project screenshots referenced by `img_path` in the `projects` table (e.g. `/imgs/marcyNexus.png`, `/imgs/QLab.png`), plus the site logo:
  - `logo.svg` — active logo, used by `Header.jsx` and as the browser favicon (see `index.html`).
  - `logo.jpg`, `logoTrans.jpg` — earlier logo versions; not currently referenced anywhere in `src/`. Worth confirming before deleting.
