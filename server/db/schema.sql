DROP TABLE IF EXISTS project_links;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS titles;

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

CREATE TABLE skills (
  id         SERIAL PRIMARY KEY,
  category   VARCHAR(100) NOT NULL,
  sort_order INTEGER DEFAULT 0,
  name       VARCHAR(100) NOT NULL
);

CREATE TABLE titles (
  id    SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

ALTER TABLE projects      ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills        ENABLE ROW LEVEL SECURITY;
ALTER TABLE titles        ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read" ON projects      FOR SELECT USING (true);
CREATE POLICY "public read" ON project_links FOR SELECT USING (true);
CREATE POLICY "public read" ON skills        FOR SELECT USING (true);
CREATE POLICY "public read" ON titles        FOR SELECT USING (true);
