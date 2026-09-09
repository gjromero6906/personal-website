import { useNavigate } from 'react-router-dom';

function ProjectCard({ id, project, imgPath, bio, links }) {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/projects/${id}`);

  return (
    <li
      className="project-card"
      data-id={id}
      role="link"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToDetail();
        }
      }}
    >
      <img src={imgPath} alt={project} className="project-img" />
      <h3 className="project-title">{project}</h3>
      <p className="project-bio">{bio}</p>
      <div className="project-links">
        {links.map(({ type, url }) => (
          <a
            key={type}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {type}
          </a>
        ))}
      </div>
    </li>
  );
}

export default ProjectCard;
