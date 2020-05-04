const matchesRepo = require('./matches.db.repository');
const teamsRepo = require('../teams/teams.db.repository');
const matchCreator = require('./utils/matchCreator');

const getAll = () => matchesRepo.getAll();

const createMatch = async matchInfo => {
  const team1 = await teamsRepo.getByName(matchInfo.team1);
  const team2 = await teamsRepo.getByName(matchInfo.team2);
  const team1ID = team1.id;
  const team2ID = team2.id;
  const allMatchData = matchCreator.completeMatch(
    Object.assign(matchInfo, { team1ID, team2ID })
  );
  const match = await matchesRepo.createMatch(allMatchData);
  return match;
};

module.exports = { getAll, createMatch };
