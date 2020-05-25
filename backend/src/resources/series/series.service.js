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

const correctSeriesMatches = async (series, seriesMatches) => {
  if (series.isComplete) {
    series.isComplete = false;
    series.winner = false;
    series.loser = false;
  }
  const seriesLeadScore =
    series.team1Score > series.team2Score
      ? series.team1Score
      : series.team2Score;
  let seriesMatchesAmount = seriesMatches.length;
  let seriesMatchesEmpty = seriesMatches.filter(match => !match.isComplete)
    .length;
  while (gamesToWin - seriesLeadScore !== seriesMatchesEmpty) {
    if (gamesToWin - seriesLeadScore < seriesMatchesEmpty) {
      await matchesPepo.deleteMatch(
        seriesMatches[seriesMatches.length - 1]._id
      );
      seriesMatchesEmpty -= 1;
      seriesMatchesAmount -= 1;
    }
    if (gamesToWin - seriesLeadScore > seriesMatchesEmpty) {
      const playoffRound =
        series.tag === 'Semi-Finals' || series.tag === 'Half-Finals'
          ? `Playoff ${series.tag}`
          : series.tag;
      const isReverse = SERIES_FORMAT[seriesMatchesAmount] !== 'H';
      await createSeriaMatch(series, playoffRound, isReverse);
      seriesMatchesEmpty += 1;
      seriesMatchesAmount += 1;
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

const createHalfFinals = async () => {
  const semiFinalsSeries = await seriesRepo.getByTag('Semi-Finals');
  const wSeriesSemiFinals = semiFinalsSeries.filter(
    series => series.half === 'white'
  )[0];
  const bSeriesSemiFinals = semiFinalsSeries.filter(
    series => series.half === 'black'
  )[0];
  if (wSeriesSemiFinals.isComplete && bSeriesSemiFinals.isComplete) {
    const halfLeaders = await teamsRepo.getHalfLeaders();
    const wLeader = halfLeaders.filter(leader => leader.half === 'white')[0];
    const bLeader = halfLeaders.filter(leader => leader.half === 'black')[0];
    const wOpponent = await teamsRepo.getById(wSeriesSemiFinals.winner);
    const bOpponent = await teamsRepo.getById(bSeriesSemiFinals.winner);
    const wSeries = await createSeries(wLeader, wOpponent, 'Half-Finals');
    const bSeries = await createSeries(bLeader, bOpponent, 'Half-Finals');
    for (let i = 0; i < gamesToWin; i++) {
      if (SERIES_FORMAT[i] === 'H') {
        await createSeriaMatch(wSeries, 'Playoff Half-Finals');
        await createSeriaMatch(bSeries, 'Playoff Half-Finals');
      } else {
        await createSeriaMatch(wSeries, 'Playoff Half-Finals', true);
        await createSeriaMatch(bSeries, 'Playoff Half-Finals', true);
      }
    }
  }
  return;
};

const createNYCSFinals = async () => {
  const halfFinalsSeries = await seriesRepo.getByTag('Half-Finals');
  const wSeriesFinals = halfFinalsSeries.filter(
    series => series.half === 'white'
  )[0];
  const bSeriesFinals = halfFinalsSeries.filter(
    series => series.half === 'black'
  )[0];
  if (wSeriesFinals.isComplete && bSeriesFinals.isComplete) {
    const wTeam = await teamsRepo.getById(wSeriesFinals.winner);
    const bTeam = await teamsRepo.getById(bSeriesFinals.winner);
    const nycsSeries = await createSeries(wTeam, bTeam, 'NYCS Finals');
    for (let i = 0; i < gamesToWin; i++) {
      await createSeriaMatch(nycsSeries, 'NYCS Finals');
    }
  }
  return;
};

const deleteSeries = async playoffRound => {
  if (playoffRound === 'Semi-Finals') {
    const leaders = await teamsRepo.getHalfLeaders();
    for (const team of leaders) {
      await teamsRepo.updateTeam(team._id, {
        stats: Object.assign(team.stats, { halfLeader: false })
      });
    }
  }
  const allSeries = await seriesRepo.getByTag(playoffRound);
  for (const series of allSeries) {
    const allMatches = await matchesPepo.getBySeriesId(series._id);
    for (const match of allMatches) {
      await matchesPepo.deleteMatch(match._id);
    }
    await seriesRepo.deleteSeries(series._id);
  }
  return;
};

module.exports = {
  getAll,
  createSemiFinals,
  createHalfFinals,
  createNYCSFinals,
  updateSeries,
  deleteSeries
};
