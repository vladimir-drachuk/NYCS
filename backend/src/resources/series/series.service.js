const { SERIES_DURATION, SERIES_FORMAT } = require('../../common/config');
const teamsRepo = require('../teams/teams.db.repository');
const matchesPepo = require('../matches/matches.db.repository');
const seriesRepo = require('./series.db.repository');
const updateSeriesScore = require('./utils/updateSeriesScore');
const gamesToWin = (SERIES_DURATION + 1) / 2;

const getAll = () => seriesRepo.getAll();

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
    isComplete: false,
    half:
      team1Info.half === team2Info.half
        ? team1Info.half
        : 'error: teams in different halfs'
  });
  return series;
};

const createSeriaMatch = (series, tourneyStatus, isReverse) =>
  matchesPepo.createMatch({
    team1: isReverse ? series.team2 : series.team1,
    team2: isReverse ? series.team1 : series.team2,
    team1ID: isReverse ? series.team2ID : series.team1ID,
    team2ID: isReverse ? series.team1ID : series.team2ID,
    series: series._id,
    isOneHHalf: true,
    half: series.half,
    tourneyStatus
  });

const correctSeriesMatches = async (series, seriesMatches /**/) => {
  if (series.isComplete) {
    series.isComplete = false;
    series.winner = false;
    series.loser = false;
  }
  const seriesLeadScore =
    series.team1Score > series.team2Score
      ? series.team1Score
      : series.team2Score;
  const seriesMatchesEmpty = seriesMatches.filter(match => !match.isComplete);
  while (gamesToWin - seriesLeadScore === seriesMatchesEmpty) {
    if (gamesToWin - seriesLeadScore < seriesLeadScore) {
      await matchesPepo.deleteMatch(
        seriesMatches[seriesMatches.length - 1]._id
      );
    }
    if (gamesToWin - seriesLeadScore > seriesLeadScore) {
      // await createSeriaMatch(series, series.)
    }
  }
};

const updateSeries = async match => {
  let series = await seriesRepo.getById(match.series);
  const seriesMatches = await matchesPepo.getBySeriesId(series._id);
  series = await updateSeriesScore(series, seriesMatches);
  await seriesRepo.updateSeries(series);
  if (series.team1Score === gamesToWin || series.team2Score === gamesToWin) {
    await seriesRepo.updateSeries(
      Object.assign(series, {
        isComplete: true,
        winner:
          series.team1Score === gamesToWin ? series.team1ID : series.team2ID,
        loser:
          series.team1Score === gamesToWin ? series.team2ID : series.team1ID
      })
    );
  } else {
    await correctSeriesMatches(series, seriesMatches);
  }
  return;
};

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
  for (let i = 0; i < gamesToWin; i++) {
    if (SERIES_FORMAT[i] === 'H') {
      await createSeriaMatch(wSeries, 'Playoff Semi-Finals');
      await createSeriaMatch(bSeries, 'Playoff Semi-Finals');
    } else {
      await createSeriaMatch(wSeries, 'Playoff Semi-Finals', true);
      await createSeriaMatch(bSeries, 'Playoff Semi-Finals', true);
    }
  }
  return;
};

module.exports = { getAll, createSemiFinals, updateSeries };
