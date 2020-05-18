const getScore = require('./getScore');

const getRegularStat = (team, matches) => {
  const matchesTeam = matches.filter(
    match => team.id === match.team1ID || team.id === match.team2ID
  );

  const wins = matchesTeam.filter(
    match =>
      team.id === match.winner && match.isOT === false && match.isKR === false
  ).length;

  const winsOT = matchesTeam.filter(
    match => team.id === match.winner && match.isOT === true
  ).length;

  const loses = matchesTeam.filter(
    match =>
      team.id === match.loser && match.isOT === false && match.isKR === false
  ).length;

  const losesOT = matchesTeam.filter(
    match => team.id === match.loser && match.isOT === true
  ).length;

  const winsHalf = matchesTeam.filter(
    match => team.id === match.winner && match.isOneHalf === true
  ).length;

  const losesHalf = matchesTeam.filter(
    match => team.id === match.loser && match.isOneHalf === true
  ).length;

  const games = wins + winsOT + loses + losesOT;

  const roundWin = matchesTeam.reduce(
    (acc, match) =>
      team.id === match.team1ID
        ? acc + match.team1Score
        : acc + match.team2Score,
    0
  );

  const roundLost = matchesTeam.reduce(
    (acc, match) =>
      team.id === match.team1ID
        ? acc + match.team2Score
        : acc + match.team1Score,
    0
  );

  const points = 3 * wins + 2 * winsOT + losesOT;

  const nycsPercent =
    games === 0
      ? null
      : Math.round(
          ((wins + winsOT) / (wins + winsOT + loses + losesOT)) * 1000
        );

  const halfPercent =
    winsHalf + losesHalf === 0
      ? null
      : Math.round((winsHalf / (winsHalf + losesHalf)) * 1000);

  const score = getScore({
    wins,
    points,
    nycsPercent,
    halfPercent,
    roundWin
  });

  const wlStr = matchesTeam
    .map(match => (team.id === match.winner ? 'W' : 'L'))
    .join('');

  const stats = {
    wins,
    winsOT,
    loses,
    losesOT,
    games,
    roundWin,
    roundLost,
    wlStr,
    winsHalf,
    losesHalf,
    points,
    nycsPercent,
    halfPercent,
    score
  };
  return Object.assign(team, { stats });
};

module.exports = getRegularStat;
