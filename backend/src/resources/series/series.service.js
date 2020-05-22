const teamsRepo = require('../teams/teams.db.repository');
const seriesRepo = require('./series.db.repository');

const getLeaderTrio = async half => {
  const teams = await teamsRepo.getHalf(half);
  return teams.sort((a, b) => b.stats.score - a.stats.score).splice(0, 3);
};

const createSeries = async (team1Info, team2Info, tag) => {
  await seriesRepo.createSeries({
    tag,
    team1: team1Info.name,
    team2: team2Info.name,
    team1ID: team1Info._id,
    team2ID: team2Info._id,
    isComplete: false
  });
};

const createSemiFinals = async () => {
  const whiteTrio = await getLeaderTrio('white');
  const blackTrio = await teamsRepo.getLeaderTrio('black');
  await teamsRepo.updateTeam(whiteTrio[0]._id, { stats: { halfLeader: true } });
  await teamsRepo.updateTeam(blackTrio[0]._id, { stats: { halfLeader: true } });
  await createSeries(whiteTrio[1], whiteTrio[2], 'Semi-Finals');
  await createSeries(blackTrio[1], blackTrio[2], 'Semi-Finals');
  return;
};

module.exports = { createSemiFinals };
