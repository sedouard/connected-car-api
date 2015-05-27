/// <reference path="../../typings/mocha/mocha.d.ts"/>

var request = require('supertest');
var assert = require('assert');
var express = require('express');
var vehicles = require('../../routes/vehicles');
var nitrogenUtils = require('../../lib/nitrogen-utils.js');
var nconf = require('nconf');
nconf.file({ file: './config.json' });
var app = express();
app.use('/vehicles', vehicles);


beforeEach(function (done) {
  nitrogenUtils.authenticate()
  .then(function(){
    console.log('sucessfully authenticated to nitrogen');
    done();
  });
});

describe('Vehicles API', function(){
  describe('GET - /vehicles/:id', function(){
    it('should return trip for id', function(done){
      this.timeout(5000);
      request(app).get('/vehicles/' + nconf.get('test_device_id'))
      .expect(200)
      .end(function(err, res) {
        console.log("Response: %j", res.body);
        assert.equal(err, null);
        done();
      });
    });
  });
});