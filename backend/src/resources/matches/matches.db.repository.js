const Match = require('./match.model');

const getAll = () => Match.find({});

const getAllComplete = () => Match.find({ isComplete: true });

const createMatch = matchInfo => Match.create(matchInfo);

module.exports = { getAll, createMatch, getAllComplete };
