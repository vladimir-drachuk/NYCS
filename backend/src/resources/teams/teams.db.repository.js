const Team = require('./team.model');

const getAll = () => Team.find({});

module.exports = { getAll };
