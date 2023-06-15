const express = require('express');
const router = express.Router();

const ApiService = require('./apiService');
const ApiController = require('./apiController');

const apiService = new ApiService();
const apiController = new ApiController({ apiService });

router.get('/helloworld', apiController.helloworld);

module.exports = router;