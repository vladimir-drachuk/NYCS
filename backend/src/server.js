const app = require('./app');
const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');

const teamsService = require('./resources/teams/teams.service');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  console.log('Data base connected');

  await teamsService.initTeams();
  console.log('All teams updated');

  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
