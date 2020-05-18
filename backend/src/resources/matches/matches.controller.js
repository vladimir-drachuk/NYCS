const matchesService = require('./matches.service');
// const teamsService = require('../teams/teams.service');

const getAll = async (req, res) => {
  const matches = await matchesService.getAll();
  res.json(matches);
};

const updateMatch = async (req, res) => {
  await matchesService.updateMatch(req.body);
  res.status(200).json({ ok: true });
};

// matchesService.createMatch({
//   team1: 'Lokomotiv',
//   team2: 'Rotor',
//   team1Score: 13,
//   team2Score: 6
// });

// matchesService.createMatch({
//   team1: 'Zenit',
//   team2: 'Chelsea',
//   team1Score: 13,
//   team2Score: 6
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Manchester',
//   team1Score: 13,
//   team2Score: 6
// });

// matchesService.createMatch({
//   team1: 'Lokomotiv',
//   team2: 'Manchester',
//   team1Score: 13,
//   team2Score: 6
// });

// matchesService.createMatch({
//   team1: 'Zenit',
//   team2: 'Arsenal',
//   team1Score: 13,
//   team2Score: 6
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle',
//   team1Score: 13,
//   team2Score: 6
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });

// matchesService.createMatch({
//   team1: 'Dynamo',
//   team2: 'Newcastle'
// });
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

module.exports = { getAll, updateMatch };
