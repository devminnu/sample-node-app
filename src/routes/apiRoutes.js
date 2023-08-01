const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/hello', apiController.getHello);
router.get('/greeting/:name?', apiController.getGreeting);

module.exports = router;
