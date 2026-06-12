import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error(`Fetch failed. ${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section id="Projects">
      <h1>My Projects!</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul id="projectGrid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
