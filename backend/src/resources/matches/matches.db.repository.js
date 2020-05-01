const Match = require('./match.model');

const getAll = () => Match.find({});

const createMatch = matchInfo => Match.create(matchInfo);

module.exports = { getAll, createMatch };
