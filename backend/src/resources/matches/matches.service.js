const matchesRepo = require('./matches.db.repository');
const teamsRepo = require('../teams/teams.db.repository');
const matchCreator = require('./utils/matchCreator');
const getStat = require('../teams/utils/getStat');

const getAll = () => matchesRepo.getAll();

const getAllCompleteRegular = () => matchesRepo.getAllCompleteRegular();

const getAllByTeamId = id => matchesRepo.getAllByTeamId(id);

const createMatch = async matchInfo => {
  const team1 = await teamsRepo.getByName(matchInfo.team1);
  const team2 = await teamsRepo.getByName(matchInfo.team2);
  const matches = await getAll();
  const team1ID = team1.id;
  const team2ID = team2.id;
  const isOneHalf = team1.half === team2.half;
  const allMatchData = matchCreator.completeMatch(
    Object.assign(matchInfo, { team1ID, team2ID, isOneHalf })
  );
  const match = await matchesRepo.createMatch(allMatchData);
  await teamsRepo.updateTeam(team1.id, getStat(team1, matches));
  await teamsRepo.updateTeam(team2.id, getStat(team2, matches));
  return match;
};

module.exports = { getAll, createMatch, getAllCompleteRegular, getAllByTeamId };
