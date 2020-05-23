const updateSeriesScore = (series, seriesMatches) => {
  const updatedSeries = Object.assign(series);
  updatedSeries.team1Score = seriesMatches.filter(
    match => match.winner === series.team1ID
  ).length;
  updatedSeries.team2Score = seriesMatches.filter(
    match => match.winner === series.team2ID
  ).length;
  return updatedSeries;
};

module.exports = updateSeriesScore;
