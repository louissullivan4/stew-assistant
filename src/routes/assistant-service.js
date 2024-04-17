const express = require('express');
const router = express.Router();

const { time, date, timeAndDate } = require('../controllers/basicsController');

router.get('/time', time);
router.get('/date', date);
router.get('/datetime', timeAndDate);

module.exports = router;