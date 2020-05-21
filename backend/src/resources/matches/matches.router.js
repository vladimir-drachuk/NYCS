const router = require('express').Router();
const matchesController = require('./matches.controller');

router
  .route('/')
  .get(matchesController.getAll)
  .post(matchesController.changeSchedule)
  .put(matchesController.updateMatch);

router.route('/time').put(matchesController.updateTime);

module.exports = router;
