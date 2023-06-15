require('dotenv').config();
const express = require('express');
const path = require('path');

const apiRouter = require('./api/apiRouter');

const app = express();

const port = process.env.PORT || '3000';

app.use('/', express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res, next) => {
//     res.send('<h1>Express server</h1>');
// });

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});