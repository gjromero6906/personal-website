# controllers/

Express route handlers. Each one calls the matching `../models/model.js` function, wraps it in a try/catch, and sends either the data or a JSON error message.

- **`controllers.js`**
  - `listProjects` — `GET /api/projects`
  - `findProject` — `GET /api/projects/:id`
  - `listSkills` — `GET /api/skills`
  - `listTitles` — `GET /api/titles`

  All four return `500` with `{ message: '...' }` on failure; `findProject` also returns `404` when the requested project doesn't exist.
