const logger = require('../utils/logger');

const time = async (req, res) => {
    const now = new Date();
    res.json({ time: now.toTimeString() });
};

const date = async (req, res) => {
    const now = new Date();
    res.json({ date: now.toDateString() });
};

const timeAndDate = async (req, res) => {
    const now = new Date();
    res.json({ time: now.toTimeString(), date: now.toDateString() });
};

module.exports = { time, date, timeAndDate };