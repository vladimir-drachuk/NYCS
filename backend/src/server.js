const app = require('./app');
const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Data base connected');

  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
