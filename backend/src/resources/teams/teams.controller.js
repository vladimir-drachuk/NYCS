const teamServise = require('./teams.service');

const getAll = async (req, res) => {
  const teams = await teamServise.getAll();
  res.json(teams);
};

module.exports = { getAll };
