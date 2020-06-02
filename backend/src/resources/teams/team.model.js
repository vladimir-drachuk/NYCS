const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: String,
    shortname: String,
    teamtag: String,
    half: String,
    colors: Object,
    description: String,
    logo: Object,
    stats: Object
  },
  { versionKey: false }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
