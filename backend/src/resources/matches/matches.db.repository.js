const Match = require('./match.model');

const getAll = () => Match.find({});

const getAllCompleteRegular = () =>
  Match.find({ isComplete: true, tourneyStatus: 'Regular' });

const createMatch = matchInfo => Match.create(matchInfo);

module.exports = { getAll, getAllCompleteRegular, createMatch };
