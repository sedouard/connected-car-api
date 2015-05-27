/// <reference path="../../typings/mocha/mocha.d.ts"/>
/* global describe, beforeEach, it */
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
      this.timeout(3000);
      request(app).get('/vehicles/' + nconf.get('test_device_id'))
      .expect(200)
      .end(function(err, res) {
        assert.equal(err, null);
        assert.equal(res.body.data[0].type, 'vehicle');
        assert.equal(res.body.data[0].id, nconf.get('test_device_id'));
        assert.equal(res.body.included[0].type, 'trip');
        assert.equal(res.body.included[0].trip_events.length, 3);
        assert.equal(res.body.data[0].links.self !== null, true);
        assert.equal(res.body.data[0].links.trips.linkage !== null, true);
        done();
      });
    });
  });

  describe('GET - /vehicles', function(){
    it('should return all vehicles in system', function(done){
      this.timeout(3000);
      request(app).get('/vehicles')
      .expect(200)
      .end(function(err, res) {
        
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
      this.timeout(3000);
      request(app).get('/vehicles/' + nconf.get('test_device_id') + '/trips')
      .expect(200)
      .end(function(err, res) {
        
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