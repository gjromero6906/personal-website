const Model = require('../models/model');

module.exports.listProjects = async (req, res) => {
  try {
    const projectList = await Model.list();
    res.send(projectList);
  } catch (err) {
    console.error('listProjects error:', err.message);
    res.status(500).send({ message: 'Failed to fetch projects.' });
  }
};

module.exports.findProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Model.find(Number(id));

    if (!project) {
      return res.status(404).send({ message: `No Project with the id ${id}` });
    }
    res.send(project);
  } catch (err) {
    console.error('findProject error:', err.message);
    res.status(500).send({ message: 'Failed to fetch project.' });
  }
};

module.exports.listTitles = async (req, res) => {
  try {
    const titles = await Model.listTitles();
    res.send(titles);
  } catch (err) {
    console.error('listTitles error:', err.message);
    res.status(500).send({ message: 'Failed to fetch titles.' });
  }
};

module.exports.listSkills = async (req, res) => {
  try {
    const skills = await Model.listSkills();
    res.send(skills);
  } catch (err) {
    console.error('listSkills error:', err.message);
    res.status(500).send({ message: 'Failed to fetch skills.' });
  }
};
