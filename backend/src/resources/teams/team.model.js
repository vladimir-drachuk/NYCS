const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: String,
    teamtag: String,
    half: String,
    description: String,
    score: Number
  },
  { versionKey: false }
);

const Team = mongoose.model('Team', teamSchema);

// Team.create({
//   name: 'Rotor',
//   teamtag: 'rotor',
//   half: 'white',
//   description: 'Russian team',
//   score: 3000
// });

// Team.create({
//   name: 'Arsenal',
//   teamtag: 'ars',
//   half: 'black',
//   description: 'English team',
//   score: 7500
// });

// Team.create({
//   name: 'Zenit',
//   teamtag: 'zenit',
//   half: 'white',
//   description: 'Russian team',
//   score: 4500
// });

// Team.create({
//   name: 'Liverpool',
//   teamtag: 'liv',
//   half: 'black',
//   description: 'English team',
//   score: 4000
// });

module.exports = Team;
