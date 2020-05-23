const app = require('./app');
const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const teamsService = require('./resources/teams/teams.service');

// const matchesRepo = require('./resources/matches/matches.db.repository');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  console.log('Data base connected');

  await teamsService.initTeams();
  console.log('All teams updated');

  // matchesRepo.clearPlayoff();

  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
