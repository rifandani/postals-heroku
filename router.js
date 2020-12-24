const express = require('express');
const router = express.Router();
// files
const Controller = require('./controllers/Controller');

router.get('/postals', Controller.getPostals);
router.get('/postal', Controller.getPostal);
router.get('/cities', Controller.getCities);
router.get('/sub-districts', Controller.getSubDistricts);
router.get('/urbans', Controller.getUrbans);
router.post('/verify-phone', Controller.verifyPhone);

module.exports = router;
