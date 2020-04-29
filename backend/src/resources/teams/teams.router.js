const router = require('express').Router();
const teamsController = require('./teams.controller');

router.route('/').get(teamsController.getAll);

module.exports = router;
