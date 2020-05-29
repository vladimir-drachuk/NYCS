const teamsRepo = require('./teams.db.repository');
const matchesRepo = require('../matches/matches.db.repository');
const seriesRepo = require('../series/series.db.repository');
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

const getOnlyStats = async () => {
  const teams = await getAll();
  const statsArray = teams.map(team => ({
    _id: team._id,
    stats: team.stats
  }));
  return statsArray;
};

const getPlace = async teamCriteria => {
  let whiteTeams;
  let blackTeams;
  let allTeams;
  let series;
  let teamPlaceCriteria;
  let champion;
  let second;
  switch (teamCriteria) {
    case 'Semi-Finals':
      teamPlaceCriteria = 10;
      whiteTeams = await teamsRepo.getHalf('white');
      blackTeams = await teamsRepo.getHalf('black');
      allTeams = [whiteTeams, blackTeams];
      for (const teams of allTeams) {
        teams
          .sort((aTeam, bTeam) => aTeam.stats.score - bTeam.stats.score)
          .splice(teams.length - 3);
      }
      allTeams = [...whiteTeams, ...blackTeams];
      break;
    case 'Half-Finals':
      teamPlaceCriteria = 6;
      series = await seriesRepo.getByTag('Semi-Finals');
      break;
    case 'NYCS Finals':
      teamPlaceCriteria = 4;
      series = await seriesRepo.getByTag('Half-Finals');
      break;
    case 'Complete':
      teamPlaceCriteria = 2;
      series = await seriesRepo.getByTag('NYCS Finals');
      champion = await teamsRepo.getById(series[0].winner);
      second = await teamsRepo.getById(series[0].loser);
      allTeams = [champion, second];
      break;
    default:
      break;
  }
  if (teamCriteria !== 'Semi-Finals' && teamCriteria !== 'Complete') {
    const team1 = await teamsRepo.getById(series[0].loser);
    const team2 = await teamsRepo.getById(series[1].loser);
    allTeams = [team1, team2];
  }
  allTeams.sort((aTeam, bTeam) => aTeam.stats.score - bTeam.stats.score);
  for (const [i, team] of allTeams.entries()) {
    await teamsRepo.updateTeam(team._id, {
      stats: Object.assign(team.stats, { totalPlace: teamPlaceCriteria - i })
    });
  }
};

const deletePlace = async teamCriteria => {
  let places;
  switch (teamCriteria) {
    case 'Semi-Finals':
      places = [7, 8, 9, 10];
      break;
    case 'Half-Finals':
      places = [5, 6];
      break;
    case 'NYCS Finals':
      places = [3, 4];
      break;
    default:
      break;
  }
  for (const place of places) {
    const team = await teamsRepo.getByTotalPlace(place);
    await teamsRepo.updateTeam(team._id, {
      stats: Object.assign(team.stats, { totalPlace: null })
    });
  }
};

module.exports = { initTeams, getAll, getOnlyStats, getPlace, deletePlace };
