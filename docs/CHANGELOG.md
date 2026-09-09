# Changelog

Chronological record of notable changes to this site. Newest first.

## 2026-09-09

### Project detail pages + routing
- Added `react-router-dom`. `frontend/src/App.jsx` now wraps the app in a `BrowserRouter` with two routes: `/` (`frontend/src/pages/Home.jsx` — the previous single-page content) and `/projects/:id` (new: `frontend/src/pages/ProjectDetail.jsx`).
- `frontend/src/components/Header.jsx` — nav links now point at `/` plus a hash (`/#About`, `/#Projects`, etc.) so they still work from a project detail page; `Home.jsx` scrolls to the target section on arrival.
- `frontend/src/components/ProjectCard.jsx` — the whole card is now clickable and keyboard-navigable to its detail page (`role="link"`, `Enter`/`Space` support); the GitHub/LiveLink/Presentation links inside it `stopPropagation` so they still open normally instead of triggering navigation.

### Real "why" / "what" / "technologies" content per project
- `server/db/schema.sql` — added `why TEXT` and `technologies TEXT[]` columns to `projects`.
- `server/db/seed.sql` — rewrote `bio`/`why`/`technologies` for all 10 projects from real source material instead of guesses: READMEs and commit history under `~/Development` (`mod-7`, `mod-4`, `mod-3`, `Mod-1-Project-Week`, `BlackJack`, `capstone/Quantum-Lab`), the Rhythm Revolvers and Marcy Nexus repos (found on the Windows side, `C:\Users\Sager\Lua` and `C:\Users\Sager\marcy-nexus`), and the Hotel Reservations guided-exercise instructions provided directly.
- No `models/model.js` changes needed — `list()`/`find()` already select `*`.

### Retro-arcade "pin board" project detail page
- `frontend/index.html` — added the "Press Start 2P" Google Font.
- `ProjectDetail.jsx` is built as a pinned dossier card: a glowing pushpin, an 8-bit notched-corner frame (pure CSS `clip-path`, no images), a pixel-font title, the screenshot in a console-style bezel, a "high score date" stamp, and "why"/"what" shown as retro quest-log boxes. Scoped entirely to `#ProjectDetail` — the homepage project grid is unchanged.
- Tech stack reuses the existing About-section pattern instead of a one-off design: each technology renders via `SkillChip`/`skillDefinitions.js` (click-to-reveal popover with a description + "Learn more" link). Added ~30 new entries to `frontend/src/data/skillDefinitions.js` for technologies named across the 10 projects (Vite, Supabase, Next.js, TypeScript, Docker, and more).

### Similar Missions
- `ProjectDetail.jsx` fetches the full project list and links to the two other projects sharing the most technologies (falls back to the next two in list order if there's no overlap yet), shown as square, `object-fit: contain` thumbnail cards so screenshots display in full rather than cropped.
- Added a second "< BACK TO SELECT" button at the bottom of the page, in addition to the existing one at the top.

### Doc Pins — one pinned note per doc/markdown file in a project's repo
- New `project_docs` table (`title`, `summary`, `url`, `sort_order`) in `schema.sql`, joined into `models/model.js`'s `find()` (ordered by `sort_order`).
- `seed.sql` populated with real, per-file summaries for the two projects with a `docs/` folder: Marcy Nexus (11 docs) and Quantum Lab (12 docs), each linking to its real GitHub blob URL.
- `ProjectDetail.jsx` renders each doc as its own pinned note card (pushpin, alternating rotation) below the main dossier card.
- **Bug caught and fixed:** the new join would have 404'd every project detail page in production the moment this code shipped, until the migration ran (Supabase returns `PGRST200`, "no relationship found," for a table that doesn't exist yet). `find()` now catches that specific error and falls back to a query without `project_docs`, returning `docs: []` instead of failing the whole lookup.

### Local dev environment
- Schema/seed changes couldn't be applied to the live Supabase project from this session (destructive DB actions need explicit approval each time). Everything above was instead validated end-to-end against a local Postgres database: created a `projects` database on the local Postgres instance already configured in `server/.env`, then ran the updated `schema.sql`/`seed.sql` against it and verified the API responses.

### Deployment note
None of the above has reached the live site yet. `schema.sql` (new `why`/`technologies` columns, new `project_docs` table) and `seed.sql` (real project content + doc pins) both still need to be run against the live Supabase project — SQL editor or `psql` — for this to appear on the deployed site.

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
