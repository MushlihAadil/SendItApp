const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();

router.get('/packages', Controller.getPackages);

module.exports = router;