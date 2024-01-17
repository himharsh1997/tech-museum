const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const UserRoutes = require('./app/routes/userRoute');

app.use(bodyParser.json());

app.use('/user', UserRoutes);

app.listen(3000, () => {
    console.log(`Listening on server port ${3000} ...`);
});

exports.app = app;