'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const messages = [];

class Message {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

app.get('/message', (req, res) => {
  res.status(200).send(messages);
});

app.post('/message', (req, res) => {
  const message = new Message(req.query.text, req.query.author);

  messages.push(message);
  res.status(200).send(message);

});
app.listen(port, () => {
  console.log('App is listening on ', port);
});

module.exports = app;