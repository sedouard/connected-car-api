/* global describe, it, beforeEach */
var request = require('supertest');
var assert = require('assert');
var express = require('express');

var nconf = require('nconf');
var mockery = require('mockery');
nconf.file({ file: './config.json' });

var app;

beforeEach(function (done) {
  
  // insert mocking api
  mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
  });

  mockery.registerSubstitute('azure-storage', '../tests/mocks/azure-storage');
  mockery.registerSubstitute('nitrogen', '../tests/mocks/nitrogen');
  
  var nitrogenUtils = require('../../lib/nitrogen-utils.js');
  app = express();
  var trips = require('../../routes/trips');
  app.use('/trips', trips);
  
  nitrogenUtils.authenticate()
  .then(function(){
    console.log('sucessfully authenticated to nitrogen');
    done();
  });
});


describe('Trips API', function(){
  describe('GET - /Trips/:id', function(){
    it('should return trip for id', function(done){
        
      request(app).get('/trips/' + nconf.get('test_trip_id') )
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
describe('GET - /Trips', function(){
    it('should return all trips in system', function(done){
      request(app).get('/trips')
      .expect(200)
      .end(function(err, res) {
        
        assert.equal(res.body.data.length > 0, true);
        
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