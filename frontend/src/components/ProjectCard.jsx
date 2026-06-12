function ProjectCard({ id, project, imgPath, bio, links }) {
  return (
    <li className="project-card" data-id={id}>
      <img src={imgPath} alt={project} className="project-img" />
      <h3 className="project-title">{project}</h3>
      <p className="project-bio">{bio}</p>
      <div className="project-links">
        {links.map(({ type, url }) => (
          <a key={type} href={url} target="_blank" rel="noopener noreferrer">
            {type}
          </a>
        ))}
      </div>
    </li>
  );
}

export default ProjectCard;
