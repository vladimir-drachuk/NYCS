const Match = require('./match.model');

const getAll = () => Match.find({});

const getAllCompleteRegular = () =>
  Match.find({ isComplete: true, tourneyStatus: 'Regular' });

const getAllByTeamId = id => Match.find({ id });

const createMatch = matchInfo => Match.create(matchInfo);

module.exports = { getAll, getAllByTeamId, getAllCompleteRegular, createMatch };
