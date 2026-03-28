export const renderProjects = (projects) => {
  const list = document.querySelector('#projectGrid');
  list.innerHTML = '';

  projects.forEach((projectItem) => {
    const { id, project, imgPath, bio, gitHub, liveLink } = projectItem;

    // Create main container
    const li = document.createElement('li');
    li.classList.add('project-card');
    li.dataset.id = id;

    // Image
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = project;
    img.classList.add('project-img');

    // Title
    const title = document.createElement('h3');
    title.textContent = project;
    title.classList.add('project-title');

    // Bio
    const description = document.createElement('p');
    description.textContent = bio;
    description.classList.add('project-bio');

    // Links container
    const linksDiv = document.createElement('div');
    linksDiv.classList.add('project-links');

    // GitHub link
    const gitLink = document.createElement('a');
    gitLink.href = gitHub;
    gitLink.target = '_blank';
    gitLink.textContent = 'GitHub';

    linksDiv.appendChild(gitLink);

    // Live link (only if it exists)
    if (liveLink) {
      const live = document.createElement('a');
      live.href = liveLink;
      live.target = '_blank';
      live.textContent = 'Live Demo';
      linksDiv.appendChild(live);
    }

    // Append everything to li
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(linksDiv);

    // Append li to list
    list.appendChild(li);
  });
};

export const renderError = (msg) => {
  const errorEl = document.querySelector('#error');

  if (!msg) {
    errorEl.classList.add('hidden');
    errorEl.textContent = '';
    return;
  }

  errorEl.classList.remove('hidden');
  errorEl.textContent = msg;
};