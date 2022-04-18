const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes starts with: /flights (because of the mounting in server.js)

// GET /flights
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;


