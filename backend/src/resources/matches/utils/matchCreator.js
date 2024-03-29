const { REGULAR, REGULAR_OT, PLAYOFF } = require('../../../common/config');

const completeMatch = matchData => {
  const roundsToWinPlayoff = PLAYOFF + 1;
  const roundsToKnife = (REGULAR + REGULAR_OT) * 2 + 1;

  if (matchData.team1Score && matchData.team2Score) {
    if (matchData.team1Score > matchData.team2Score) {
      matchData.winner = matchData.team1ID;
      matchData.loser = matchData.team2ID;
    } else {
      matchData.winner = matchData.team2ID;
      matchData.loser = matchData.team1ID;
    }

    // Regular
    if (matchData.tourneyStatus === 'Regular' || !matchData.tourneyStatus) {
      if (matchData.team1Score + matchData.team2Score > REGULAR * 2) {
        matchData.isOT = true;
      }
      if (matchData.team1Score + matchData.team2Score >= roundsToKnife) {
        matchData.isKR = true;
      }

      // Playoff
    } else if (
      matchData.team1Score > roundsToWinPlayoff ||
      matchData.team2Score > roundsToWinPlayoff
    ) {
      matchData.isOT = true;
    }

    matchData.isComplete = true;
  }

  return matchData;
};

const incompleteMatch = matchData => {
  if (!matchData.team1Score || !matchData.team2Score) {
    matchData.isComplete = false;
    matchData.isOT = false;
    matchData.isKR = false;
    matchData.winner = null;
    matchData.loser = null;
  }
  return matchData;
};

module.exports = { completeMatch, incompleteMatch };
