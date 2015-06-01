/// <reference path="../../typings/mocha/mocha.d.ts"/>
/* global describe, beforeEach, it */
var request = require('supertest');
var assert = require('assert');
var express = require('express');
var drivers = require('../../routes/drivers');
var app = express();
var mockery = require('mockery');

var app;

beforeEach(function (done) {
  
  // insert mocking api
  mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
  });
  
  mockery.registerSubstitute('azure-storage', 'tests/mocks/azure-storage');
  mockery.registerSubstitute('nitrogen', 'tests/mocks/nitrogen');
  
  mockery.enable();
  app = express();
  app.use('/drivers', drivers);
  done();
});


describe('Drivers API', function(){
  describe('GET - /drivers/:id', function(){
    it('should return trip for id', function(done){
        
      request(app).get('/drivers/134123413')
      .expect(200)
      .end(function(err) {
        assert.equal(err, null);
        done();
      });
    });
  });
});