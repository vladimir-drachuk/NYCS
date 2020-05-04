const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: String,
    teamtag: String,
    half: String,
    description: String,
    score: Number,
    stats: Object
  },
  { versionKey: false }
);

const Team = mongoose.model('Team', teamSchema);

// Team.create({
//   name: 'Dynamo',
//   teamtag: 'rotor',
//   half: 'white',
//   description: 'Russian team',
//   score: 3000
// });

// Team.create({
//   name: 'Lokomotiv',
//   teamtag: 'rotor',
//   half: 'white',
//   description: 'Russian team',
//   score: 3000
// });

// Team.create({
//   name: 'Manchester',
//   teamtag: 'ars',
//   half: 'black',
//   description: 'English team',
//   score: 7500
// });

// Team.create({
//   name: 'Spartak',
//   teamtag: 'zenit',
//   half: 'white',
//   description: 'Russian team',
//   score: 4500
// });

// Team.create({
//   name: 'Newcastle',
//   teamtag: 'liv',
//   half: 'black',
//   description: 'English team',
//   score: 4000
// });

// Team.create({
//   name: 'Chelsea',
//   teamtag: 'liv',
//   half: 'black',
//   description: 'English team',
//   score: 4000
// });

module.exports = Team;
