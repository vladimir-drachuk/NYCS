const express = require('express');
const cors = require('cors');
const teamsRouter = require('./resources/teams/teams.router');
const matchesRouter = require('./resources/matches/matches.router');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/teams', teamsRouter);
app.use('/matches', matchesRouter);

module.exports = app;
