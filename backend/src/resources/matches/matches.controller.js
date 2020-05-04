const matchesServise = require('./matches.service');

const getAll = async (req, res) => {
  const matches = await matchesServise.getAll();
  res.json(matches);
};

const mock = async () => {
  // await matchesServise.createMatch({
  //   team1: 'Arsenal',
  //   team2: 'Zenit',
  //   team1Score: 16,
  //   team2Score: 14
  // });

  // await matchesServise.createMatch({
  //   team1: 'Rotor',
  //   team2: 'Zenit',
  //   team1Score: 16,
  //   team2Score: 15
  // });

  // await matchesServise.createMatch({
  //   team1: 'Liverpool',
  //   team2: 'Arsenal',
  //   team1Score: 13,
  //   team2Score: 11
  // });

  // await matchesServise.createMatch({
  //   team1: 'Arsenal',
  //   team2: 'Rotor'
  // });

  // await matchesServise.createMatch({
  //   team1: 'Zenit',
  //   team2: 'Liverpool'
  // });

  // await matchesServise.createMatch({
  //   team1: 'Rotor',
  //   team2: 'Liverpool'
  // });

  return;
};

mock();

module.exports = { getAll };
