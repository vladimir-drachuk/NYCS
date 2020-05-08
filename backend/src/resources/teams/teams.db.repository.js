const Team = require('./team.model');

const getAll = () => Team.find({});

const getByName = name => Team.findOne({ name });

const updateTeam = (id, updateInfo) =>
  Team.updateOne({ _id: id }, updateInfo).exec();

module.exports = { getAll, getByName, updateTeam };
