# server/

Express API + static file server. See [`BACKEND.md`](BACKEND.md) for the full folder map and request flow.

## Files here

- **`index.js`** — app entry point: logging middleware, serves `../frontend/dist`, registers the four `/api/*` routes, SPA fallback to `index.html` for everything else, listens on port 8080.
- **`.env`** — Supabase credentials (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`) and a local Postgres password. Currently tracked in git (no `.gitignore` entry excludes it) — consider moving secret values out of version control.
- **`package.json` / `package-lock.json`** — backend dependencies (`express`, `@supabase/supabase-js`, `dotenv`). The `start` script that actually runs this server lives in the repo-root `package.json`.

## Subfolders

- **`db/`** — Supabase client + SQL schema/seed files ([server-db.md](server-db.md))
- **`models/`** — data-access layer ([server-models.md](server-models.md))
- **`controllers/`** — route handlers ([server-controllers.md](server-controllers.md))
- **`node_modules/`** — installed dependencies
