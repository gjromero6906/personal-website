import { renderProjects,renderError } from './fetch-helpers.js';
import { getProjects } from './dom-helpers.js';

const loadProjects = async () => {
  console.log("LOADING PROJECTS...");

  const { data, error } = await getProjects();

  console.log(data, error);

  if (error) return renderError(error.message);

  renderProjects(data);
};
loadProjects();