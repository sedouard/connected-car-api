var express = require('express');
var router = express.Router();
var nconf = require('nconf');
var tableUtils = require('../lib/table-utils');
nconf.env().file({ file: './config.json' });

var sourceUrl = nconf.get('host_protocol') + '://' + nconf.get('host_name') + ':' + nconf.get('host_port');

/* GET home page. */
router.get('/', function (req, res) {	// all trips, no filter
 
  
  return tableUtils.getAllTrips()
  .then(function(results){
  
    if(!results) {
      res.send(404, 'could not find any trips.');
    }
  
    var trips = [];
    
    results.forEach(function(result){
      result.links = {
        self: sourceUrl + '/trips' + '/' + result.id,
        driver: {
          related: sourceUrl + '/drivers/' + result.driver_id
        }
      };
      delete result.driver_id;
      trips.push(result);
    });
      
    res.send({ data: trips });
  })
  .catch(function(err) {
      console.error('ERROR:');
      console.dir(err);
      return res.send(500, err);
  });
});

router.get('/:id', function (req, res) {
  if(!req.params.id) {
      return res.send(400);
  }
  
  return tableUtils.getTripsForTripId(req.params.id)
  .then(function(results){
  
    if(!results) {
      res.send(404, 'could not find vehicle with id: ' + req.params.id);
    }
  
    var trips = [];
    
    results.forEach(function(result){
      result.links = {
        self: sourceUrl + '/trips' + '/' + req.params.id,
        driver: {
          related: sourceUrl + '/drivers/' + result.driver_id
        }
      };
      delete result.driver_id;
      trips.push(result);
    });
      
    res.send({ data: trips });
  })
  .catch(function(err) {
      console.error('ERROR:');
      console.dir(err);
      return res.send(500, err);
  });
});

router.get('/:id/driver', function (req, res) {

    if(!req.params.id) {
        return res.send(400);
    }
    
    res.send(200, {
        'data': [{
            'id': '553ac59965094b476a817fa6',
            'type': 'driver',
            'name': 'Wilcox, Fitzgerald'
        }]
    });

});

module.exports = router;
