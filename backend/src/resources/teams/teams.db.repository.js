const Team = require('./team.model');

const getAll = () => Team.find({});

const getByName = name => Team.findOne({ name });

module.exports = { getAll, getByName };
