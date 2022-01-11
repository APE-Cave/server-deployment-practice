# server-deployment-practice
HTTP Express server deployed on Heroku

Deployment URL: https://aenyeart-server-deploy-dev.herokuapp.com/

## Installation 

To install, open command line and run:
```
$ git clone git@github.com:aenyeart/server-deployment-practice.git
$ cd server-deployment-practice
$ npm install
``` 
## Usage

To start server run : 
```
npm start
```

To test server run: 
```
npm test
```

## Routes

* GET `/message`: returns a list of Message objects
* POST `/message`: creates a message, saves it and returns the list of messages.

## Features

* Message:
  * Contains String: Text
  * Contains String: Author
  * Messages can be saved
  * Full list of messages returned