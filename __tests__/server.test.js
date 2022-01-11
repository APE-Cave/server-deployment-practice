'use strict';

const server = require('../app.js');
const supertest = require('supertest');
const { describe } = require('yargs');
const { expect } = require('@jest/globals');
const req = supertest(server.app);

describe('Testing my HTTP Express server', () => {
  it('Should be able to respond to a POST to /message', async () => {
    let res = await req.post('/message?text=loremipsum&author=TestAuthor');

    expect(res.status).toEqual(200);
    expect(res.body[0].text).toEqual('loremipsum');
  });
});
