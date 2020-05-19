const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: String,
    teamtag: String,
    half: String,
    description: String,
    stats: Object
  },
  { versionKey: false }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
