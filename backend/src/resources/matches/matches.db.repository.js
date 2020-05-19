const Match = require('./match.model');
const mongoose = require('mongoose');

const getAll = () => Match.find({});

const getAllCompleteRegular = () =>
  Match.find({ isComplete: true, tourneyStatus: 'Regular' });

const createMatch = matchInfo => Match.create(matchInfo);

const updateMatch = match => Match.updateOne({ _id: match._id }, match);

const dropMatchesRepo = () => mongoose.connection.collections.matches.drop();

module.exports = {
  getAll,
  getAllCompleteRegular,
  createMatch,
  updateMatch,
  dropMatchesRepo
};
