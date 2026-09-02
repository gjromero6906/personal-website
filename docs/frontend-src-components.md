# components/

One file per page section (rendered directly by `App.jsx`), or a small reusable piece used inside one of those sections.

| File | Renders | Notes |
|---|---|---|
| `Header.jsx` | Sticky top nav + logo | Pure links (`#Main`, `#About`, `#Projects`, `#Contact`) — no state, no data fetching. |
| `Hero.jsx` | `#Main` — intro / typewriter | Fetches `/api/titles`, shuffles them, and types them out one character at a time via the `useTypewriter` hook defined in this file. |
| `About.jsx` | `#About` — bio + skills grid | Fetches `/api/skills`, groups results by category, and renders one `SkillChip` per skill. Tracks which chip's definition popover is open (`activeSkill` state). |
| `SkillChip.jsx` | One clickable skill pill inside `About.jsx`'s skill grid | Click toggles a definition popover (data from `../data/skillDefinitions.js`); closes on outside click, Escape, or clicking the chip again. |
| `Projects.jsx` | `#Projects` — project grid | Fetches `/api/projects` (already ordered newest-first by the backend) and renders one `ProjectCard` per project. |
| `ProjectCard.jsx` | One project tile inside `Projects.jsx`'s grid | Presentational only — image, title, bio, and a list of links (GitHub/LiveLink/Presentation) passed in as props. |
| `Contact.jsx` | `#Contact` — contact form | Submits directly to Formspree (`https://formspree.io/f/xaqovkjy`) client-side; shows a temporary thank-you/error message. Also renders GitHub/LinkedIn/email links. |
| `Footer.jsx` | Site footer | Static content — name credit and copyright year. |
