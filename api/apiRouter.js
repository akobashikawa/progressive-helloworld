const express = require('express');
const router = express.Router();

const ApiController = require('./apiController');

const apiController = new ApiController();

router.get('/helloworld', apiController.helloworld);

module.exports = router;