const router = require('express').Router();
const teamsController = require('./teams.controller');

router.route('/').get(teamsController.getAll);
router.route('/stats').get(teamsController.getOnlyStats);

module.exports = router;
