const Model = require('../models/model');

module.exports.listProjects= (req, res) => {
    const projectList = Model.list();
    res.send(projectList);
};

module.exports.findProject= (req, res) => {
    const { id } = req.params;
    const project = Model.find(Number(id));

    if (!project) {
        return res.status(404).send({ message: `No Project with the id ${id}` });
    }
    res.send(project);
};