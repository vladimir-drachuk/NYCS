const router = require('express').Router();
const matchesController = require('./matches.controller');

router
  .route('/')
  .get(matchesController.getAll)
  .post(matchesController.changeSchedule)
  .put(matchesController.updateMatch);

module.exports = router;
