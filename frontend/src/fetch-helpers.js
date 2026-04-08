export const renderProjects = (projects) => {
  const list = document.querySelector('#projectGrid');
  list.innerHTML = '';

  projects.forEach(({ id, project, imgPath, bio, links }) => {
    const li = document.createElement('li');
    li.classList.add('project-card');
    li.dataset.id = id;

    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = project;
    img.classList.add('project-img');

    const title = document.createElement('h3');
    title.textContent = project;
    title.classList.add('project-title');

    const description = document.createElement('p');
    description.textContent = bio;
    description.classList.add('project-bio');

    const linksDiv = document.createElement('div');
    linksDiv.classList.add('project-links');

    links.forEach(({ type, url }) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.textContent = type;
      linksDiv.appendChild(a);
    });

    li.append(img, title, description, linksDiv);
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