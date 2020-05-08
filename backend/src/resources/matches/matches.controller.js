const matchesService = require('./matches.service');
// const teamsService = require('../teams/teams.service');

const getAll = async (req, res) => {
  const matches = await matchesService.getAll();
  res.json(matches);
};

matchesService.createMatch({
  team1: 'Zenit',
  team2: 'Chelsea',
  team1Score: 16,
  team2Score: 14
});

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// const mock = async () => {
//   const teams = await teamsService.getAll();
//   for (let i = 0; i < 65; i++) {
//     const team1 = teams[getRandomInt(teams.length)].name;
//     let team2 = teams[getRandomInt(teams.length)].name;
//     while (team2 === team1) {
//       team2 = teams[getRandomInt(teams.length)].name;
//     }
//     let team1Score = getRandomInt(24);
//     let team2Score = 24 - team1Score;
//     if (team1Score === team2Score) {
//       team1Score = 16;
//       team2Score = getRandomInt(3) + 12;
//     }
//     await matchesService.createMatch({
//       team1,
//       team2,
//       team1Score,
//       team2Score
//     });
//     console.log(`${i} complete`);
//   }

//   return;
// };

// mock();

module.exports = { getAll };
