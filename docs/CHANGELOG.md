# Changelog

Chronological record of notable changes to this site. Newest first.

## 2026-09-01

### About / bio content
- `frontend/src/components/About.jsx` — bio rewritten from "a Fellow at the Marcy Lab School... learning to become a software engineer" to "a Marcy Lab School alumni, having graduated in August 2026 as a software engineer."
- `frontend/src/components/Hero.jsx` — intro line changed from "I'm a fellow at Marcy Lab School learning to be a upstanding Software Engineer" to "I'm a graduate of Marcy Lab School and an upstanding Software Engineer."
- `server/db/seed.sql` — 12 typewriter title phrases containing "... Fellow" (e.g. `Software Engineer Fellow`, `Engineering Fellow`) renamed to "... Graduate" to match alumni status. The one remaining "fellowship" reference — describing the Marcy Lab School program itself in the Marcy Nexus project bio — was left as-is since it describes the program, not personal status.

### Project ordering by date
- `server/db/schema.sql` — added `project_date DATE NOT NULL DEFAULT CURRENT_DATE` to the `projects` table, so a project inserted without an explicit date automatically gets today's date.
- `server/db/seed.sql` — added a `project_date` value to every seeded project (see table below).
- `server/models/model.js` — `list()` now orders by `project_date DESC, id DESC` instead of `id ASC`, so the Projects section renders newest-first automatically. Both `list()` and `find()` expose the date as `projectDate` in the API response.

  | Project | Date |
  |---|---|
  | Quantum Lab | June 2026 |
  | Marcy Nexus | May 2026 |
  | Game Tracker | May 2026 |
  | Rhythm Revolvers | April 2026 |
  | Current Personal Website | March 2026 |
  | Anime Browser | Feb 2026 |
  | Rock Paper Scissors CLI | Jan 2026 |
  | First Static Website | Jan 2026 |
  | Black Jack | Dec 2025 |
  | Sample Hotel Reservations (Java) | Nov 2025 |

  Two pairs tie on month (only month-level precision was given); ties break by insertion id via the `id DESC` secondary sort.

### Skills / technologies
- `server/db/seed.sql` — added **Python** (Languages), **FastAPI** and **Knex** (Frameworks/Libraries/Environments); reordered Tools to Git, GitHub, VS Code, IntelliJ, Postman, Command-Line Interfaces, Maven, Chrome Developer Tools.
- Added click-to-reveal definitions: clicking a skill chip now opens a small popover with a short description and a "Learn more" link, instead of only a hover color change.
  - New: `frontend/src/data/skillDefinitions.js` — definition + docs link per skill.
  - New: `frontend/src/components/SkillChip.jsx` — chip button + popover; closes on outside click, Escape, or re-click.
  - `frontend/src/components/About.jsx` — now tracks the currently-open chip (`activeSkill`) and renders `SkillChip` instead of a plain `<li>`.
  - `frontend/src/style.css` — split the old `.skill-chips li` pill style into `.skill-chip` (the button) and `.skill-definition` (the popover card), matching the site's existing neon/terminal theme rather than copying any other project's look.

### Deployment note
`schema.sql` and `seed.sql` are applied manually against Supabase — there's no migration runner in this repo. Re-run both (schema first, then seed) for the database-affecting changes above to reach the live site.

### Documentation
- Added `CHANGELOG.md`, `FRONTEND.md`, and `BACKEND.md` — high-level history and folder maps for each half of the app.
- Added a `README.md` inside every source folder (`frontend/`, `frontend/src/`, `frontend/src/components/`, `frontend/src/data/`, `frontend/public/`, `server/`, `server/db/`, `server/models/`, `server/controllers/`) explaining the files within it.
- Consolidated all of the above into a `docs/` folder, renaming each per-folder `README.md` to reflect the folder it documents (e.g. `frontend/src/components/README.md` → `docs/frontend-src-components.md`), so every doc has a unique name in one flat directory. The repo-root `README.md` was left in place and now just links into `docs/`.
