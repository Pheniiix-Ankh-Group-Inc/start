const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');

router.post('/email', controller.handleEmail);

module.exports = router;
