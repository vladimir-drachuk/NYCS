const router = require('express').Router();
const matchesController = require('./matches.controller');

router.route('/').get(matchesController.getAll);

module.exports = router;
