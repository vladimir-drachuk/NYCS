const matchesService = require('./matches.service');

const getAll = async (req, res) => {
  const matches = await matchesService.getAll();
  res.json(matches);
};

const updateMatch = async (req, res) => {
  await matchesService.updateMatch(req.body);
  res.status(200).json({ ok: true });
};

const changeSchedule = async (req, res) => {
  await matchesService.changeSchedule(req.body);
  res.status(200).json({ ok: true });
};

module.exports = { getAll, updateMatch, changeSchedule };
