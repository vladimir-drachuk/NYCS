const Match = require('./match.model');

const getAll = () => Match.find({});

const getAllCompleteRegular = () =>
  Match.find({ isComplete: true, tourneyStatus: 'Regular' });

const createMatch = matchInfo => Match.create(matchInfo);

const updateMatch = match => Match.updateOne({ _id: match._id }, match);

module.exports = { getAll, getAllCompleteRegular, createMatch, updateMatch };
