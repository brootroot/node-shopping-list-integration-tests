const chai = require('chai');
const chaiHTTP = require('chai-http');

const { app, runServer, closeServer } = require('../server.js');

const should = chai.should();

chai.use(chaiHTTP);

describe('Recipes', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });
});
