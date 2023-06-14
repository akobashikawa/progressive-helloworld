const express = require('express');
const HelloWorld = require('./helloworld');

const app = express();

const port = 3000;

app.get('/', (req, res, next) => {
    res.send('<h1>Express server</h1>');
});

app.get('/helloworld', (req, res, next) => {
    const greeting = HelloWorld.helloworld();
    res.send(greeting);
});

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});