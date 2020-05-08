const teamsRepo = require('./teams.db.repository');
const matchesRepo = require('../matches/matches.db.repository');
const getStat = require('./utils/getStat');

const initTeams = async () => {
  const teams = await teamsRepo.getAll();
  const matches = await matchesRepo.getAllCompleteRegular();
  await teams.forEach(team => {
    const updatedTeam = getStat(team, matches);
    teamsRepo.updateTeam(updatedTeam.id, updatedTeam);
  });
};

const getAll = () => teamsRepo.getAll();

const getByName = name => teamsRepo.getByName(name);

const getTeamStat = team => getStat(team);

const updateTeam = (id, updateInfo) => teamsRepo.updateTeam(id, updateInfo);

module.exports = { initTeams, getAll, getByName, getTeamStat, updateTeam };
