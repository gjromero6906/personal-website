// Short definitions shown in the click-to-reveal popover on each skill chip
// in the About section. Missing entries just render the chip with no popover.
export const skillDefinitions = {
  // Languages
  Python: {
    text: 'A high-level, readable programming language used for scripting, APIs, data processing, and automation.',
    url: 'https://www.python.org/',
  },
  JavaScript: {
    text: "The core scripting language of the web — runs in the browser and, via Node.js, on the server too.",
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Java: {
    text: 'A statically-typed, object-oriented language built for portability — "write once, run anywhere" on the JVM.',
    url: 'https://www.java.com/',
  },
  SQL: {
    text: 'The standard language for querying and managing relational databases — selecting, joining, and shaping data.',
    url: 'https://en.wikipedia.org/wiki/SQL',
  },
  Bash: {
    text: 'A Unix shell and scripting language used to automate command-line tasks and glue tools together.',
    url: 'https://www.gnu.org/software/bash/',
  },
  HTML: {
    text: 'The markup language that structures content on the web — the skeleton of every page.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  CSS: {
    text: 'The styling language that controls layout, color, and animation for web pages.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  PostgreSQL: {
    text: 'A powerful open-source relational database known for reliability, extensibility, and SQL compliance.',
    url: 'https://www.postgresql.org/',
  },
  Lua: {
    text: 'A lightweight, embeddable scripting language often used in games — powers the Löve framework.',
    url: 'https://www.lua.org/',
  },

  // Frameworks / Libraries / Environments
  React: {
    text: 'A JavaScript library for building fast, component-based user interfaces.',
    url: 'https://react.dev/',
  },
  FastAPI: {
    text: 'A modern, high-performance Python web framework for building APIs, with automatic docs and type-based validation.',
    url: 'https://fastapi.tiangolo.com/',
  },
  Express: {
    text: 'A minimal, unopinionated Node.js framework for building web servers and APIs.',
    url: 'https://expressjs.com/',
  },
  'Node.js': {
    text: "A JavaScript runtime that lets JavaScript run outside the browser — powers this site's back end.",
    url: 'https://nodejs.org/',
  },
  'DOM API': {
    text: 'The browser interface for reading and manipulating page structure and content directly from JavaScript.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
  },
  Jest: {
    text: 'A JavaScript testing framework for writing and running unit and integration tests.',
    url: 'https://jestjs.io/',
  },
  Knex: {
    text: 'A SQL query builder for Node.js that makes writing and managing database queries more manageable.',
    url: 'https://knexjs.org/',
  },
  'Löve': {
    text: 'An open-source 2D game framework for Lua, used to build games quickly with simple, expressive code.',
    url: 'https://love2d.org/',
  },

  // Tools
  Git: {
    text: "A distributed version control system for tracking code changes and collaborating without stepping on each other's work.",
    url: 'https://git-scm.com/',
  },
  GitHub: {
    text: 'A cloud platform for hosting Git repositories, reviewing code, and collaborating on projects.',
    url: 'https://github.com/',
  },
  'VS Code': {
    text: 'A free, extensible code editor with built-in debugging, Git integration, and a large plugin ecosystem.',
    url: 'https://code.visualstudio.com/',
  },
  IntelliJ: {
    text: 'A feature-rich IDE for Java (and other JVM languages) with deep code analysis and refactoring tools.',
    url: 'https://www.jetbrains.com/idea/',
  },
  Postman: {
    text: 'A tool for building, testing, and documenting API requests without writing a client from scratch.',
    url: 'https://www.postman.com/',
  },
  'Command-Line Interfaces': {
    text: 'Text-based tools for interacting directly with a computer or server — faster and more scriptable than a GUI.',
  },
  Maven: {
    text: 'A build automation and dependency management tool for Java projects.',
    url: 'https://maven.apache.org/',
  },
  'Chrome Developer Tools': {
    text: "Chrome's built-in suite for inspecting, debugging, and profiling web pages in real time.",
    url: 'https://developer.chrome.com/docs/devtools/',
  },

  // Project technologies (shown on individual project detail pages) —
  // kept as separate entries since a project may name a tech more
  // specifically than the general skill list above (e.g. "Express.js").
  Vite: {
    text: 'A fast, modern front-end build tool with an instant dev server and hot module reloading.',
    url: 'https://vite.dev/',
  },
  'Express.js': {
    text: 'A minimal, unopinionated Node.js framework for building web servers and APIs.',
    url: 'https://expressjs.com/',
  },
  'Session-Based Auth': {
    text: 'An authentication approach where the server stores a signed session (often in a cookie) to keep a user logged in across requests.',
  },
  Supabase: {
    text: 'An open-source Firebase alternative built on Postgres — auth, a database, storage, and edge functions in one platform.',
    url: 'https://supabase.com/',
  },
  HTML5: {
    text: 'The markup language that structures content on the web — the skeleton of every page.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  'CSS3 (Grid)': {
    text: 'CSS Grid Layout — a two-dimensional system for laying out rows and columns without floats or extra markup.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout',
  },
  'JavaScript (ES6+)': {
    text: 'The core scripting language of the web — runs in the browser and, via Node.js, on the server too.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  'Fetch API': {
    text: "The browser's built-in interface for making HTTP requests from JavaScript.",
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
  },
  'Jikan REST API': {
    text: 'An unofficial, free REST API that exposes MyAnimeList data for anime and manga search and details.',
    url: 'https://jikan.moe/',
  },
  'prompt-sync': {
    text: 'A small Node.js package that lets a command-line program pause and read synchronous input from the user.',
    url: 'https://www.npmjs.com/package/prompt-sync',
  },
  'Object-Oriented Programming': {
    text: 'A programming style that models code as objects — bundling data and behavior together via classes and instances.',
  },
  'CSS (Flexbox, Grid)': {
    text: 'CSS layout systems — Flexbox for one-dimensional alignment, Grid for two-dimensional row/column layouts.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout',
  },
  'Spring (RestTemplate)': {
    text: "Spring's synchronous HTTP client for calling REST APIs from a Java application — handles requests, responses, and errors.",
    url: 'https://docs.spring.io/spring-framework/reference/integration/rest-clients.html',
  },
  'IntelliJ IDEA': {
    text: 'A feature-rich IDE for Java (and other JVM languages) with deep code analysis and refactoring tools.',
    url: 'https://www.jetbrains.com/idea/',
  },
  'REST APIs': {
    text: 'An architectural style for web APIs using standard HTTP methods (GET, POST, PUT, DELETE) to operate on resources.',
    url: 'https://en.wikipedia.org/wiki/REST',
  },
  'Exception Handling': {
    text: 'Code that anticipates and gracefully responds to runtime errors instead of letting them crash the program.',
  },
  Enums: {
    text: 'A set of named constant values, used in place of raw strings or numbers to avoid typos and make intent explicit.',
  },
  LÖVE2D: {
    text: 'An open-source 2D game framework for Lua, used to build games quickly with simple, expressive code.',
    url: 'https://love2d.org/',
  },
  'File I/O (Leaderboard Persistence)': {
    text: 'Reading and writing data to a file on disk — here, used to save high scores between play sessions.',
  },
  'Next.js': {
    text: 'A React framework with file-based routing, server rendering, and API routes built in.',
    url: 'https://nextjs.org/',
  },
  TypeScript: {
    text: 'A typed superset of JavaScript that catches errors at compile time and improves editor tooling.',
    url: 'https://www.typescriptlang.org/',
  },
  'Tailwind CSS': {
    text: 'A utility-first CSS framework for building custom designs directly in markup, without writing separate stylesheets.',
    url: 'https://tailwindcss.com/',
  },
  'Expo (React Native)': {
    text: 'A toolchain built on React Native that simplifies building, testing, and shipping cross-platform mobile apps.',
    url: 'https://expo.dev/',
  },
  'Row Level Security': {
    text: 'Postgres access control enforced at the database layer — a query only returns rows a policy allows, regardless of what the app asks for.',
    url: 'https://www.postgresql.org/docs/current/ddl-rowsecurity.html',
  },
  'npm Workspaces': {
    text: 'A built-in npm feature for managing multiple packages in one repo, sharing dependencies and linking local packages together.',
    url: 'https://docs.npmjs.com/cli/v10/using-npm/workspaces',
  },
  'React Router': {
    text: 'The standard client-side routing library for React, mapping URLs to components.',
    url: 'https://reactrouter.com/',
  },
  'Framer Motion': {
    text: 'A React animation library for building smooth transitions and gestures with a simple declarative API.',
    url: 'https://www.framer.com/motion/',
  },
  SQLAlchemy: {
    text: "Python's most widely used SQL toolkit and ORM, for mapping database rows to Python objects.",
    url: 'https://www.sqlalchemy.org/',
  },
  Pydantic: {
    text: 'A Python library for data validation and settings management using type hints.',
    url: 'https://docs.pydantic.dev/',
  },
  Docker: {
    text: 'A platform for packaging an app and its dependencies into a portable container that runs the same everywhere.',
    url: 'https://www.docker.com/',
  },
};
