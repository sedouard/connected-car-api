var express = require('express');
var router = express.Router();
var nitrogenUtils = require('../lib/nitrogen-utils');
var nconf = require('nconf');
var tableUtils = require('../lib/table-utils');
nconf.env().file({ file: './config.json' });

var sourceUrl = nconf.get('host_protocol') + '://' + nconf.get('host_name') + ':' + nconf.get('host_port');

/* GET home page. */
router.get('/:id', function (req, res) {
    
    if(!req.params.id) {
        return res.send(400);
    }
    
    nitrogenUtils.getAllDevices()
    .then(function(vehicles) {
      
      var found = false;
      vehicles.forEach(function(vehicle) {
        if (vehicle.id === req.params.id) {
           found = true;
        }
      });
      
      if (found) {
          return tableUtils.getTripsForVehicle(req.params.id);
      }
    })
    .then(function(results){

      if(!results) {
        res.send(404, 'could not find vehicle with id: ' + req.params.id);
      }

      var linkage = [];
      var included = [];
      
      results.forEach(function(result){

          linkage.push({
              'type': result.type,
              'id': result.id
          });
          
          included.push(result);
      });
      
      res.send( 
        {
          data: [{
            'type': 'vehicle',
            'name': req.params.id,
            'id': req.params.id,
            // we dont have any actual data for make/model/year/mileage
            'make': 'Toyota',
            'model': 'Prius',
            'production_year': '2013',
            'is_active': 'true',
            'links': {
              'self': sourceUrl + '/vehicles/' + req.params.id,
              'trips': {
                'related': sourceUrl + '/vehicles/' + req.params.id + '/trips',
                'linkage': linkage
              }
            }
          }],
          'included': included
        });
    })
    .catch(function(err) {
        console.error('ERROR:');
        console.dir(err);
        console.error(err.stack);
        return res.send(500, err);
    });
});


router.get('/', function (req, res) {

    nitrogenUtils.getAllDevices()
    .then(function(vehicles) {

      var response = [];

      vehicles.forEach(function(vehicle) {
        response.push({
            'type': 'vehicle',
            'name': vehicle.id,
            'id': vehicle.id,
            // we dont have any actual data for make/model/year/mileage
            'make': 'Toyota',
            'model': 'Prius',
            'production_year': '2013',
            'is_active': 'true',
            'links': {
              'self': sourceUrl + '/vehicles/' + vehicle.id,
              'trips': {
                'related': sourceUrl + '/vehicles/' + vehicle.id + '/trips',
              }
            }
        });
      });
      res.send(200, 
        {
          data: response
        }
      );
    });
});

router.get('/:id/trips', function (req, res) {

    if(!req.params.id) {
        return res.send(400);
    }
    
    nitrogenUtils.getAllDevices()
    .then(function(vehicles) {
      
      var found = false;
      vehicles.forEach(function(vehicle) {
        if (vehicle.id === req.params.id) {
           found = true;
        }
      });
      
      if (found) {
          return tableUtils.getTripsForVehicle(req.params.id);
      }
    })
    .then(function(results){

      if(!results) {
        res.send(404, 'could not find vehicle with id: ' + req.params.id);
      }

      var trips = [];
      
      results.forEach(function(result){
        result.links = {
          self: sourceUrl + '/trips/' + result.id,
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
        console.error(err.stack);
        return res.send(500, err);
    });
});

module.exports = router;
