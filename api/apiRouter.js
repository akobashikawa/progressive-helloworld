const express = require('express');
const router = express.Router();

const HelloWorld = require('../core/helloworld');

router.get('/helloworld', (req, res, next) => {
    const greeting = HelloWorld.helloworld();
    res.json({ greeting });
});

module.exports = router;