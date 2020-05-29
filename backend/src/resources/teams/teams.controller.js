const teamServise = require('./teams.service');

const getAll = async (req, res) => {
  const teams = await teamServise.getAll();
  res.json(teams);
};

const getOnlyStats = async (req, res) => {
  const statsArray = await teamServise.getAll();
  res.status(200).json(statsArray);
};

module.exports = { getAll, getOnlyStats };
