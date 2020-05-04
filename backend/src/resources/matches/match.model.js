const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchSchema = new Schema(
  {
    team1: String,
    team1ID: String,
    team2: String,
    team2ID: String,
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
      default: ''
    },
    team2Score: {
      type: Number,
      default: ''
    },
    isComplete: {
      type: Boolean,
      default: false
    },
    isOT: {
      type: Boolean,
      default: false
    },
    isKR: {
      type: Boolean,
      default: false
    },
    tourneyStatus: {
      type: String,
      default: 'Regular'
    }
  },
  { versionKey: false }
);

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
