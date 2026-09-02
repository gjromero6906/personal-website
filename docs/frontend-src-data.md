# data/

Static data that lives only in the frontend — not fetched from the API.

- **`skillDefinitions.js`** — maps each skill name (as seeded in the `skills` table) to a short description and, where relevant, a link to its official docs/homepage. Consumed by `../components/SkillChip.jsx` to populate the click-to-reveal definition popover in the About section. A skill with no matching entry here just renders its chip with no popover — this file doesn't need to stay in lockstep with the database, but a newly added skill won't have a definition until one is added here too.
