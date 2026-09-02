# src/

React application source.

## Files

- **`main.jsx`** — React DOM entry point; renders `<App />` into `#root` (wrapped in `StrictMode`) and imports the global stylesheet.
- **`App.jsx`** — root component; assembles the page by rendering `Header`, then `Hero`, `About`, `Projects`, `Contact` inside `<main>`, then `Footer`. This is the single place that defines page-section order.
- **`style.css`** — the site's one global stylesheet. Defines the neon/terminal theme (CSS variables for color and glow at the top), then per-section rules (header, hero, about, skills, project cards, contact form, footer), plus responsive breakpoints at the bottom.

## Subfolders

- **`components/`** — one file per page section or reusable UI piece ([frontend-src-components.md](frontend-src-components.md))
- **`data/`** — static data used only on the frontend ([frontend-src-data.md](frontend-src-data.md))
