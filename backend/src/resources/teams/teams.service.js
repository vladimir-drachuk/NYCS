const teamsRepo = require('./teams.db.repository');
const matchesRepo = require('../matches/matches.service');
const getStat = require('./utils/getStat');

const getAll = async () => {
  const teams = await teamsRepo.getAll();
  const matches = await matchesRepo.getAllComplete();
  return getStat(teams, matches);
};

module.exports = { getAll };
