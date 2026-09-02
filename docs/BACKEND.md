# Backend

Express API + static file server for the built frontend, backed by Supabase (Postgres).

## Folder map

| Folder | Contents |
|---|---|
| `db/` | Supabase client, table schema, seed data — see [server-db.md](server-db.md) |
| `models/` | Data-access layer — one function per read operation — see [server-models.md](server-models.md) |
| `controllers/` | Express route handlers — call a model function, shape the HTTP response — see [server-controllers.md](server-controllers.md) |
| `node_modules/` | Installed dependencies. Not source. |

There is no dedicated `routes/` folder — routes are wired directly in `index.js`.

## Top-level files

- **`index.js`** — app entry point. Sets up request logging middleware, serves `../frontend/dist` as static files, registers the four `/api/*` routes, falls back to `index.html` for any non-API request (so client-side anchor links / SPA routing keep working), and starts listening on port 8080.
- **`.env`** — environment variables consumed by `db/db.js` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`), plus a local Postgres password. **Note:** this file is currently tracked in git (no `.gitignore` excludes it) — worth moving any secret values out of version control.
- **`package.json` / `package-lock.json`** — dependencies (`express`, `@supabase/supabase-js`, `dotenv`). No scripts are defined here; the `start` script that actually runs this server lives in the repo-root `package.json`.

## Request flow

```
index.js route  →  controllers/controllers.js handler  →  models/model.js query  →  Supabase  →  JSON response
```

## Applying database changes

`db/schema.sql` and `db/seed.sql` are run manually against Supabase (SQL editor or `psql`) — there's no migration runner in this repo. After editing either file, re-run it against the live database for the change to take effect on the deployed site.

See [FRONTEND.md](FRONTEND.md) for the client side of this.
