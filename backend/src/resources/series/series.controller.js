const seriesService = require('./series.service');
const teamsService = require('../teams/teams.service');

const getAll = async (req, res) => {
  const series = await seriesService.getAll();
  res.status(200).json(series);
};

const goToNextRound = async (req, res) => {
  switch (req.body.type) {
    case 'Semi-Finals':
      await seriesService.createSemiFinals();
      await teamsService.getPlace(req.body.type);
      break;
    case 'Half-Finals':
      await seriesService.createHalfFinals();
      await teamsService.getPlace(req.body.type);
      break;
    case 'NYCS Finals':
      await seriesService.createNYCSFinals();
      await teamsService.getPlace(req.body.type);
      break;
    case 'Complete':
      await teamsService.getPlace(req.body.type);
      await seriesService.completeChamp();
      break;
    default:
      break;
  }
  res.status(200).json({ ok: true });
};

const deleteSeries = async (req, res) => {
  await seriesService.deleteSeries(req.body.type);
  await teamsService.deletePlace(req.body.type);
  res.status(200).json({ ok: true });
};

const correctFinals = async (req, res) => {
  await seriesService.correctFinals();
  res.status(200).json({ ok: true });
};

module.exports = { getAll, goToNextRound, deleteSeries, correctFinals };
