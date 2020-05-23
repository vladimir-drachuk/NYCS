/* eslint-disable no-unused-expressions */
const matchesRepo = require('./matches.db.repository');
const teamsRepo = require('../teams/teams.db.repository');
const seriesService = require('../series/series.service');
const matchCreator = require('./utils/matchCreator');
const getRegularStat = require('../teams/utils/getStat');

const getAll = () => matchesRepo.getAll();

const createMatch = async matchInfo => {
  const team1 = await teamsRepo.getByName(matchInfo.team1);
  const team2 = await teamsRepo.getByName(matchInfo.team2);
  const matches = await matchesRepo.getAllCompleteRegular();
  const team1ID = team1.id;
  const team2ID = team2.id;
  const isOneHalf = team1.half === team2.half;
  const allMatchData = matchCreator.completeMatch(
    Object.assign(matchInfo, { team1ID, team2ID, isOneHalf })
  );
  const match = await matchesRepo.createMatch(allMatchData);
  await teamsRepo.updateTeam(team1ID, getRegularStat(team1, matches));
  await teamsRepo.updateTeam(team2ID, getRegularStat(team2, matches));
  return match;
};

const updateMatch = async match => {
  const team1 = await teamsRepo.getByName(match.team1);
  const team2 = await teamsRepo.getByName(match.team2);
  match.team1Score !== null && match.team2Score !== null
    ? matchCreator.completeMatch(match)
    : matchCreator.incompleteMatch(match);
  await matchesRepo.updateMatch(match);
  if (match.tourneyStatus === 'Regular') {
    const matches = await matchesRepo.getAllCompleteRegular();
    await teamsRepo.updateTeam(team1.id, getRegularStat(team1, matches));
    await teamsRepo.updateTeam(team2.id, getRegularStat(team2, matches));
  } else {
    await seriesService.updateSeries(match);
  }
  return;
};

const updateTime = async (id, timeString) => {
  const timeArray = timeString.split('/');
  const time = new Date(timeArray[2], timeArray[0] - 1, timeArray[1]);
  const updated = await matchesRepo.updateTime(id, time);
  return updated;
};

const changeSchedule = async matches => {
  await matchesRepo.dropMatchesRepo();
  for (let match of matches) {
    if (!match._id) {
      match = await createMatch(match);
    } else {
      match = await matchesRepo.createMatch(match);
    }
  }
  const teams = await teamsRepo.getAll();
  const matchesRegular = await matchesRepo.getAllCompleteRegular();
  for (const team of teams) {
    await teamsRepo.updateTeam(team.id, getRegularStat(team, matchesRegular));
  }
  return matches;
};

module.exports = {
  getAll,
  createMatch,
  updateMatch,
  updateTime,
  changeSchedule
};
