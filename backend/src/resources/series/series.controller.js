const seriesService = require('./series.service');

const getAll = async (req, res) => {
  const series = await seriesService.getAll();
  res.status(200).json(series);
};

const goToNextRound = async (req, res) => {
  switch (req.body.type) {
    case 'Semi-Finals':
      await seriesService.createSemiFinals();
      break;
    default:
      break;
  }
  res.status(200).json({ ok: true });
};

const deleteSeries = async (req, res) => {
  await seriesService.deleteSeries(req.body.type);
  res.status(200).json({ ok: true });
};

module.exports = { getAll, goToNextRound, deleteSeries };
