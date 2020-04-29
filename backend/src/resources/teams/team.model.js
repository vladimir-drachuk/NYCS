const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: String,
    teamtag: String, // unique
    half: String,
    description: String,
    score: Number
  },
  { versionKey: false }
);

const Team = mongoose.model('Team', teamSchema);

// Team.create({
//   name: 'Spartak',
//   teamtag: 'spartak',
//   half: 'white',
//   description: 'Best Russian team',
//   score: 9000
// });

// Team.create({
//   name: 'Chelsea',
//   teamtag: 'che',
//   half: 'black',
//   description: 'Not Best English team',
//   score: 7000
// });

// Team.create({
//   name: 'Dynamo',
//   teamtag: 'dynamo',
//   half: 'white',
//   description: 'Not Best Russian team',
//   score: 8000
// });

// Team.create({
//   name: 'Manchester',
//   teamtag: 'mu',
//   half: 'black',
//   description: 'Best English team',
//   score: 6000
// });

module.exports = Team;
