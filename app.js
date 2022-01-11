'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const messages = [];

app.get('/message', (req, res) => {
  res.status(200).send(messages);
});
app.post('/message', (req, res) => {
  const message = {
    text: req.query.text,
    author: req.query.author,
  };
  messages.push(message);
  res.status(200).send(message);

});
app.listen(port, () => {
  console.log('App is listening on ', port);
});

module.exports = app;