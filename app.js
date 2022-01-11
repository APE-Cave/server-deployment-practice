'use strict';

const express = require('express');
const app = express();

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
  res.status(200).send(messages);

});
app.use(function (req, res) {
  res.status(404).send('***** Nothing found *****');
});
module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on : ' + port);
    });
  },
  app,
};
