const getScore = stats => {
  const { wins, points, nycsPercent, halfPercent, roundWin } = stats;
  const nycsPercentKoeff = nycsPercent || 1;
  const halfPercentKoeff = halfPercent || 1;
  // priorities
  const first = 1000000000000;
  const second = 1000000000;
  const third = 1000000;
  const fourth = 1000;
  const fifth = 1;

  const score =
    first * points +
    second * nycsPercentKoeff +
    third * halfPercentKoeff +
    fourth * wins +
    fifth * roundWin;

  return score;
};

module.exports = getScore;
