const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();

router.post('/packages', Controller.postPackage);
router.get('/packages', Controller.getPackages);
router.get('/packages/:id', Controller.getOnePackage);
router.put('/packages/:id', Controller.updatePackages);
router.delete('/packages/:id', Controller.deletePackages);
router.get('/reports', Controller.getReports);

module.exports = router;