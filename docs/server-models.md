# models/

Data-access layer — every Supabase query in the app lives here. Controllers call these functions and never touch Supabase directly.

- **`model.js`**
  - `list()` — all projects plus their links, ordered by `project_date DESC, id DESC` (newest first), camelCased for the frontend (`imgPath`, `projectDate`, `links`).
  - `find(id)` — a single project plus its links by id; returns `null` if not found.
  - `listTitles()` — the flat array of typewriter title strings, in insertion order.
  - `listSkills()` — all skills grouped by `category` (ordered by `sort_order`, then `id`), returned as `{ [category]: string[] }`.
