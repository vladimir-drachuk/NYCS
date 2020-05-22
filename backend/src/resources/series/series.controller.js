const seriesService = require('./series.service');

const goToNextRound = async (req, res) => {
  switch (req.body.type) {
    case 'Semi-finals':
      await seriesService.createSemiFinals();
      break;
    default:
      break;
  }
  res.status(200).json({ ok: true });
};

module.exports = { goToNextRound };
