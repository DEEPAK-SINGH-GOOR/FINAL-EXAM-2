const express = require('express');
const { createAlert } = require('../controllers/complane.controllers');

const router = express.Router();

router.post('/alert', createAlert);

module.exports = router;