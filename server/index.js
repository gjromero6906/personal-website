const express = require('express');
const path = require('path');

const app = express();
const pathToFrontend = path.join(__dirname, '../frontend');

const Controllers = require('./controllers/controllers');

////////////////////////
// Middleware
////////////////////////

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);
app.use(express.static(pathToFrontend));
app.use(express.json());

////////////////////////
// Endpoints
////////////////////////


app.get('/api/projects', Controllers.listProjects);
app.get('/api/projects/:id', Controllers.findProject);

// TODO: Catch-all handler — send a 404 JSON error for unmatched /api routes,
// or serve index.html for all other routes (SPA fallback)
app.use((req, res) => {
  res.status(404).send({ message: `Not found: ${req.originalUrl}` });
});

const port = 8080;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
