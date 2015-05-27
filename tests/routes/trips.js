/* global describe, it */
var request = require('supertest');
var assert = require('assert');
var express = require('express');
var trips = require('../../routes/trips');
var nconf = require('nconf');
nconf.file({ file: './config.json' });
var app = express();
app.use('/trips', trips);

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
});