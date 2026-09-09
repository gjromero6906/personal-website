import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SkillChip from '../components/SkillChip.jsx';
import { skillDefinitions } from '../data/skillDefinitions.js';

function formatDate(dateStr) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

// Picks up to `count` other projects that share the most technologies with
// `project`. Falls back to just the next projects in the list if there's no
// technology overlap to go on (e.g. technologies not populated yet).
function getSimilarProjects(project, allProjects, count = 2) {
  const others = allProjects.filter((p) => p.id !== project.id);

  if (project.technologies?.length) {
    const scored = others
      .map((p) => ({
        project: p,
        overlap: (p.technologies || []).filter((t) => project.technologies.includes(t)).length,
      }))
      .filter(({ overlap }) => overlap > 0)
      .sort((a, b) => b.overlap - a.overlap);

    if (scored.length > 0) return scored.slice(0, count).map((s) => s.project);
  }

  return others.slice(0, count);
}

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [error, setError] = useState(null);
  const [activeTech, setActiveTech] = useState(null);

  useEffect(() => {
    setProject(null);
    setError(null);
    setActiveTech(null);

    fetch(`/api/projects/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Fetch failed. ${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data) => setProject(data))
      .catch((err) => setError(err.message));

    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setAllProjects(data))
      .catch(() => setAllProjects([]));
  }, [id]);

  const similarProjects = useMemo(() => {
    if (!project) return [];
    return getSimilarProjects(project, allProjects);
  }, [project, allProjects]);

  if (error) {
    return (
      <section id="ProjectDetail" className="pinboard">
        <div className="pin-slot">
          <span className="pushpin" aria-hidden="true" />
          <div className="pixel-frame">
            <div className="pixel-card">
              <h1 className="arcade-heading">GAME OVER</h1>
              <p className="pixel-body">{error}</p>
              <Link to="/#Projects" className="pixel-btn">
                &lt; BACK TO SELECT
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section id="ProjectDetail" className="pinboard">
        <div className="pin-slot">
          <span className="pushpin" aria-hidden="true" />
          <div className="pixel-frame">
            <div className="pixel-card">
              <h1 className="arcade-heading blink">LOADING&hellip;</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { project: title, imgPath, bio, why, technologies, projectDate, links, docs } = project;

  return (
    <section id="ProjectDetail" className="pinboard">
      <div className="pin-slot">
        <span className="pushpin" aria-hidden="true" />

        <div className="pixel-frame">
          <div className="pixel-card">
            <Link to="/#Projects" className="pixel-btn pixel-btn-back">
              &lt; BACK TO SELECT
            </Link>

            <h1 className="arcade-heading">{title}</h1>

            {imgPath && (
              <div className="screen-bezel">
                <img src={imgPath} alt={title} className="project-detail-img" />
              </div>
            )}

            {projectDate && (
              <p className="high-score-tag">HIGH SCORE DATE: {formatDate(projectDate)}</p>
            )}

            {technologies?.length > 0 && (
              <div className="quest-box">
                <p className="quest-label">&#9654; TECH STACK</p>
                <ul className="skill-chips">
                  {technologies.map((tech) => (
                    <SkillChip
                      key={tech}
                      name={tech}
                      definition={skillDefinitions[tech]}
                      isActive={activeTech === tech}
                      onToggle={setActiveTech}
                    />
                  ))}
                </ul>
              </div>
            )}

            {why && (
              <div className="quest-box">
                <p className="quest-label">&#9654; QUEST LOG: WHY</p>
                <p className="pixel-body">{why}</p>
              </div>
            )}

            <div className="quest-box">
              <p className="quest-label">&#9654; QUEST LOG: WHAT</p>
              <p className="pixel-body">{bio}</p>
            </div>

            {links?.length > 0 && (
              <div className="pixel-btn-row">
                {links.map(({ type, url }) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn"
                  >
                    {type}
                  </a>
                ))}
              </div>
            )}

            {similarProjects.length > 0 && (
              <div className="quest-box">
                <p className="quest-label">&#9654; SIMILAR MISSIONS</p>
                <div className="similar-row">
                  {similarProjects.map((p) => (
                    <Link key={p.id} to={`/projects/${p.id}`} className="similar-card">
                      {p.imgPath && (
                        <div className="similar-card-thumb">
                          <img src={p.imgPath} alt={p.project} className="similar-card-img" />
                        </div>
                      )}
                      <span className="similar-card-title">{p.project}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link to="/#Projects" className="pixel-btn pixel-btn-back-bottom">
              &lt; BACK TO SELECT
            </Link>
          </div>
        </div>
      </div>

      {docs?.length > 0 && (
        <>
          <div className="doc-pins-header">
            <p className="doc-pins-heading">&#9654; PROJECT DOCS</p>
            <p className="doc-pins-subheading">
              Pinned .md files from this project&apos;s GitHub repo
            </p>
          </div>

          <div className="doc-pins">
            {docs.map((doc, i) => (
              <a
                key={doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`doc-pin doc-pin-${i % 3}`}
              >
                <span className="pushpin doc-pushpin" aria-hidden="true" />
                <p className="doc-pin-title">{doc.title}</p>
                <p className="doc-pin-summary">{doc.summary}</p>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ProjectDetail;
