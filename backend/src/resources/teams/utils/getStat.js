const getStat = (teams, matches) =>
  teams.map(team => {
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
    const wlStr = matchesTeam
      .map(match => (team.id === match.winner ? 'W' : 'L'))
      .join('');

    const stats = { wins, winsOT, loses, losesOT, roundWin, roundLost, wlStr };
    return Object.assign(team, { stats });
  });

module.exports = getStat;
