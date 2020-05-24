const Team = require('./team.model');

const getAll = () => Team.find({});

const getById = _id => Team.findOne({ _id });

const getByName = name => Team.findOne({ name });

const getHalfLeaders = () => Team.find({ 'stats.halfLeader': true });

const updateTeam = (id, updateInfo) =>
  Team.updateOne({ _id: id }, updateInfo).exec();

const getHalf = half => Team.find({ half });

module.exports = {
  getAll,
  getById,
  getByName,
  updateTeam,
  getHalf,
  getHalfLeaders
};
