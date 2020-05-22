const { SERIES_DURATION } = require('../../common/config');
const teamsRepo = require('../teams/teams.db.repository');
const matchesPepo = require('../matches/matches.db.repository');
const seriesRepo = require('./series.db.repository');

const getLeaderTrio = async half => {
  const teams = await teamsRepo.getHalf(half);
  return teams.sort((a, b) => b.stats.score - a.stats.score).splice(0, 3);
};

const createSeries = async (team1Info, team2Info, tag) => {
  const series = await seriesRepo.createSeries({
    tag,
    team1: team1Info.name,
    team2: team2Info.name,
    team1ID: team1Info._id,
    team2ID: team2Info._id,
    isComplete: false
  });
  return series;
};

const createSeriaMatch = (series, tourneyStatus) =>
  matchesPepo.createMatch({
    team1: series.team1,
    team2: series.team2,
    team1ID: series.team1ID,
    team2ID: series.team2ID,
    series: series._id,
    isOneHHalf: true,
    tourneyStatus
  });

const createSemiFinals = async () => {
  const whiteTrio = await getLeaderTrio('white');
  const blackTrio = await getLeaderTrio('black');
  await teamsRepo.updateTeam(whiteTrio[0]._id, {
    stats: Object.assign(whiteTrio[0].stats, { halfLeader: true })
  });
  await teamsRepo.updateTeam(blackTrio[0]._id, {
    stats: Object.assign(blackTrio[0].stats, { halfLeader: true })
  });
  const wSeries = await createSeries(whiteTrio[1], whiteTrio[2], 'Semi-Finals');
  const bSeries = await createSeries(blackTrio[1], blackTrio[2], 'Semi-Finals');
  for (let i = 0; i < SERIES_DURATION; i++) {
    await createSeriaMatch(wSeries, 'Playoff Semi-Finals');
    await createSeriaMatch(bSeries, 'Playoff Semi-Finals');
  }

  return;
};

module.exports = { createSemiFinals };
