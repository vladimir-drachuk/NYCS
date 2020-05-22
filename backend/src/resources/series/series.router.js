const router = require('express').Router();
const seriesController = require('./series.controller');

router.route('/').post(seriesController.goToNextRound);

module.exports = router;
