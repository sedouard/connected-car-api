var request = require('supertest');
var assert = require('assert');
var express = require('express');
var vehicles = require('../../routes/drivers');
var app = express();
app.use('/vehicles', vehicles);

var response = {
  viewName: ''
  , data : {}
  , render: function(view, viewData) {
      viewName = view;
      data = viewData;
  }
};

describe('Vehicles API', function(){
  describe('GET - /vehicles/:id', function(){
    it('should return trip for id', function(done){
        
      request(app).get('/vehicles/134123413')
      .expect(200)
      .end(function(err, res) {
        assert.equal(err, null);
        done();
      });
    });
  });
});