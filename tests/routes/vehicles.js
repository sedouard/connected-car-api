/// <reference path="../../typings/mocha/mocha.d.ts"/>
/* global describe, beforeEach, it */
var request = require('supertest');
var assert = require('assert');
var express = require('express');
var nitrogenUtils = require('../../lib/nitrogen-utils.js');
var mockery = require('mockery');
var nconf = require('nconf');
nconf.env().file({ file: './config.json' });
var app;

beforeEach(function (done) {
  
  // insert mocking api
  mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
  });

  mockery.registerSubstitute('azure-storage', '../tests/mocks/azure-storage');
  mockery.registerSubstitute('nitrogen', '../tests/mocks/nitrogen');
  
  mockery.enable();
  app = express();
  var vehicles = require('../../routes/vehicles');
  app.use('/vehicles', vehicles);
  
  nitrogenUtils.authenticate()
  .then(function(){
    console.log('sucessfully authenticated to nitrogen');
    done();
  });
});

describe('Vehicles API', function(){
  this.timeout(3000);
  describe('GET - /vehicles/:id', function(){
    it('should return trip for id', function(done){
      request(app).get('/vehicles/' + nconf.get('test_device_id'))
      .expect(200)
      .end(function(err, res) {
        assert.equal(err, null);
        assert.equal(res.body.data[0].type, 'vehicle');
        assert.equal(res.body.data[0].id, nconf.get('test_device_id'));
        assert.equal(res.body.included[0].type, 'trip');
        assert.equal(res.body.included[0].trip_events.length, 4);
        assert.equal(res.body.data[0].links.self !== null, true);
        assert.equal(res.body.data[0].links.trips.linkage !== null, true);
        done();
      });
    });
  });

  describe('GET - /vehicles', function(){
    it('should return all vehicles in system', function(done){
      request(app).get('/vehicles')
      .expect(200)
      .end(function(err, res) {
        
        assert.equal(err, null);
        assert.equal(res.body.data.length > 1, true);
        
        for (var i in res.body.data) {
          
          if (res.body.data %1 === 0) {
             var record = res.body.data[i];
            assert.equal(typeof record.id, 'string');
            assert.equal(record.type, 'vehicle');
            assert.equal(typeof record.make, 'string');
            assert.equal(typeof record.model, 'string');
            assert.equal(typeof record.production_year, 'string');
            assert.equal(typeof record.links.self, 'string');
            assert.equal(typeof record.links.trips.related, 'string');  
          }
          
        }
        done();
      });
    });
  });

  describe('GET - /vehicles/:id/trips', function(){
    it('should return trips for specified vehicle id', function(done){
      request(app).get('/vehicles/' + nconf.get('test_device_id') + '/trips')
      .expect(200)
      .end(function(err, res) {

        assert.equal(err, null);
        assert.equal(res.body.data.length === 1, true);
        
        for (var i in res.body.data) {
          
          if (res.body.data %1 === 0) {
             var record = res.body.data[i];
            assert.equal(typeof record.id, 'string');
            assert.equal(record.type, 'trip');
            assert.equal(typeof record.trip_events, 'array');
            assert.equal(record.trip_events.length, 3);
            assert.equal(typeof record.links.self, 'string');
            assert.equal(typeof record.links.trips.related, 'string');  
          }
          
        }
        done();
      });
    });
  });
});