# frontend/

The Vite + React client. See [`FRONTEND.md`](FRONTEND.md) for the full folder map and data-flow notes.

## Files here

- **`index.html`** — HTML entry point; mounts the React app into `#root` and loads `src/main.jsx`.
- **`vite.config.js`** — Vite config: React plugin + dev-server proxy (`/api` → `http://localhost:8080`).
- **`package.json` / `package-lock.json`** — frontend dependencies and scripts (`npm run dev`, `npm run build`, `npm run preview`).
- **`skills-lock.json`** — lockfile for the `.agents/skills` tooling below; not part of the deployed app.

## Subfolders

- **`src/`** — application source code ([frontend-src.md](frontend-src.md))
- **`public/`** — static assets copied as-is into the build ([frontend-public.md](frontend-public.md))
- **`dist/`** — generated production build (from `npm run build`); safe to delete, not committed source
- **`node_modules/`** — installed dependencies
- **`.agents/`** — editor/AI-agent skill definitions, unrelated to the deployed site
