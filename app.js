'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/test', (req, res) => {
  res.status(200).send('Successsssss');
});

app.listen(port, () => {
  console.log('App is listening on ', port);
});