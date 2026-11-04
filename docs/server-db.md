# db/

Everything related to the Supabase/Postgres database.

- **`db.js`** — creates and exports the shared Supabase client, configured from the `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` env vars. Every function in `../models/model.js` imports this.
- **`schema.sql`** — full table definitions (`projects`, `project_links`, `skills`, `titles`), row-level security enablement, and public-read policies for all four tables. Drops and recreates all four tables — running it wipes existing data.
- **`seed.sql`** — actual content: project entries (each with a `project_date`), their links, the skills grid, and the pool of typewriter title phrases. Starts with `TRUNCATE ... RESTART IDENTITY CASCADE`, so running it replaces all current rows.

## Applying changes

Neither file runs automatically — there's no migration runner in this repo. After editing one, run it manually against the Supabase database (SQL editor or `psql`) for the change to reach the live site: `schema.sql` first if the table structure changed, then `seed.sql`.
