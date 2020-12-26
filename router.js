const express = require('express');
const router = express.Router();
// files
const Controller = require('./controllers/Controller');

// middleware
// router.use(compression()); // gzip responses
router.use(cors());
router.use(express.json()); // request application/type === json
router.use(express.urlencoded({ extended: false })); // form data object, value objectnya berasal dari input attribute name

router.get('/postals', Controller.getPostals);
router.get('/postal', Controller.getPostal);
router.get('/cities', Controller.getCities);
router.get('/sub-districts', Controller.getSubDistricts);
router.get('/urbans', Controller.getUrbans);
router.post('/verify-phone', Controller.verifyPhone);

module.exports = router;
