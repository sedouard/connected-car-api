var request = require('supertest');
var assert = require('assert');
var express = require('express');
var trips = require('../../routes/trips');
var app = express();
app.use('/trips', trips);

var response = {
  viewName: ''
  , data : {}
  , render: function(view, viewData) {
      viewName = view;
      data = viewData;
  }
};

describe('Trips API', function(){
  describe('GET - /Trips/:id', function(){
    it('should return trip for id', function(done){
        
      request(app).get('/trips/134123413')
      .expect(200)
      .end(function(err, res) {
        assert.equal(err, null);
        done();
      });
    });
  });
});