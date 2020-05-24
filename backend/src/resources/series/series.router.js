const router = require('express').Router();
const seriesController = require('./series.controller');

router
  .route('/')
  .get(seriesController.getAll)
  .post(seriesController.goToNextRound)
  .delete(seriesController.deleteSeries);

module.exports = router;
