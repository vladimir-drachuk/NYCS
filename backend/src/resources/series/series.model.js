const mongoose = require('mongoose');

const { Schema } = mongoose;

const seriesSchema = new Schema(
  {
    tag: String,
    team1: String,
    team2: String,
    team1ID: String,
    team2ID: String,
    half: String,
    winner: {
      type: String,
      default: null
    },
    loser: {
      type: String,
      default: null
    },
    team1Score: {
      type: Number,
      default: 0
    },
    team2Score: {
      type: Number,
      default: 0
    },
    isComplete: {
      type: Boolean,
      default: false
    },
    isChampComplete: Boolean
  },
  { versionKey: false }
);

const Team = mongoose.model('Series', seriesSchema);

module.exports = Team;
