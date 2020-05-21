const matchesService = require('./matches.service');

const getAll = async (req, res) => {
  const matches = await matchesService.getAll();
  res.json(matches);
};

const updateMatch = async (req, res) => {
  await matchesService.updateMatch(req.body);
  res.status(200).json({ ok: true });
};

const updateTime = async (req, res) => {
  await matchesService.updateTime(req.body.matchID, req.body.time);
  res.status(200).json({ ok: true });
};

const changeSchedule = async (req, res) => {
  await matchesService.changeSchedule(req.body);
  res.status(200).json({ ok: true });
};

module.exports = { getAll, updateMatch, updateTime, changeSchedule };
