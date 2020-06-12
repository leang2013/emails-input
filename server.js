
const path = require('path');
const express = require('express');

const host = 'localhost';
const port = 3000;

const app = express();

app.listen(port, () => console.log(`Listening on http://${host}:${port}/`));

app.use('/', express.static(path.join(`${__dirname}/demo`)));
app.use('/', express.static(path.join(`${__dirname}/dist`)));
