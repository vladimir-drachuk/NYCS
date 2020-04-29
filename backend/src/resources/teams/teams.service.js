const teamsRepo = require('./teams.db.repository');

const getAll = () => teamsRepo.getAll();

module.exports = { getAll };
