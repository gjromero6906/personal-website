require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const pathToFrontend = path.join(__dirname, '../frontend/dist');

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

app.use((req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).send({ message: `Not found: ${req.originalUrl}` });
  }
  res.sendFile(path.join(pathToFrontend, 'index.html'));
});

const port = 8080;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
