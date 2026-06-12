DROP TABLE IF EXISTS project_links;
DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
  id       SERIAL PRIMARY KEY,
  project  VARCHAR(255) NOT NULL,
  img_path VARCHAR(255),
  bio      TEXT
);

CREATE TABLE project_links (
  id         SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  type       VARCHAR(50),
  url        TEXT
);

ALTER TABLE projects     ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read" ON projects      FOR SELECT USING (true);
CREATE POLICY "public read" ON project_links FOR SELECT USING (true);
