require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.send('<h1>Ebal rot !</h1>');

    next();
});

app.listen('3000', () => {
    console.log(`Server running on port 3000`);
});
