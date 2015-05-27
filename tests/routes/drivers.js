/* global describe, it */
var request = require('supertest');
var assert = require('assert');
var express = require('express');
var drivers = require('../../routes/drivers');
var app = express();
app.use('/drivers', drivers);

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