const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/signup', (req, res) => {
    return res.status(200).send('Service is available');
});

app.get('/login', (req, res) => {
    return res.status(200).send('Service is available');
});

app.listen(3000, () => {
    console.log(`Listening on server port ${SERVER_PORT} ...`);
});

exports.app = app;