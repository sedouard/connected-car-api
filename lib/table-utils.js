var nconf = require('nconf');
var RSVP = require('rsvp');
nconf.env().file({ file: './config.json' });
var azureStorage = require('azure-storage');

var tableService = azureStorage.createTableService(nconf.get('storage_account_name'), nconf.get('storage_account_key'));

// use promises instead
var queryEntities = RSVP.denodeify(tableService.queryEntities);

function _getTripDataForQuery(entity, tableQuery) {

  return queryEntities.call(tableService, nconf.get('trip_locations_table_name'), tableQuery, null)
  .then(function(result) {

    var trip = {
      trip_events: []
    };

    // variable which keeps track of how many entries we have.
    // we then only add every skipCount % nconf.get('skip_location_event_interval') === 0
    var skipCount = -1;
    result.entries.forEach(function(entry) {

      var event = {
        'id': entry.RowKey._,
        // the backend tables don't report event types so hardcode here
        'event_type': 'location_reported',
        'type': 'event',
        'timestamp': (new Date(parseInt(entry.MeasurementTime._))).toISOString(),
        'speed': entry.Speed._,
        'location': {
          // the location id will be same as trip_event id which is the measurement time
          'id': entry.RowKey._,
          'latitude': entry.Latitude._,
          'longitude': entry.Longitude._,
          'direction': entry.Heading._
        }
      };
      
      skipCount = skipCount + 1;

      if (skipCount % nconf.get('skip_location_event_interval') !== 0 ) {
        // we will exclude this location entry in the table from the api response
        return;
      }

      trip.trip_events.push(event);
      trip.id = entity.RowKey._;
      trip.type = 'trip';
      // TODO: Where is the driver data coming from?
      trip.driver_id = '134123413';
    });
    
    return trip;
  });

}

module.exports.getTripsForTripId = function (id) {
  var summaryQuery = new azureStorage.TableQuery()
    .top(5)
    .where('RowKey eq ?', id);
    
  return queryEntities.call(tableService, nconf.get('trip_summaries_table_name'), summaryQuery, null)
  .then( function(result) {

  	var promises = [];

    result.entries.forEach(function (entity) {
      var tripQuery = new azureStorage.TableQuery()
        .where('PartitionKey eq ?', entity.PartitionKey._)
        .and('RowKey gt ?', entity.StartTime._)
        .and('RowKey lt ?', entity.EndTime._);
        

      var promise = _getTripDataForQuery(entity, tripQuery);
      
      promises.push(promise);
    
    });
   
    return RSVP.all(promises);
  });
};

module.exports.getAllTrips = function () {
  var summaryQuery = new azureStorage.TableQuery(); // return all trips, no filter
    
  return queryEntities.call(tableService, nconf.get('trip_summaries_table_name'), summaryQuery, null)
  .then( function(result) {

  	var promises = [];
    
    result.entries.forEach(function (entity) {
      var tripQuery = new azureStorage.TableQuery()
        .where('PartitionKey eq ?', entity.PartitionKey._)
        .and('RowKey gt ?', entity.StartTime._)
        .and('RowKey lt ?', entity.EndTime._);
        

      var promise = _getTripDataForQuery(entity, tripQuery);
      
      promises.push(promise);
    
    });
   
    return RSVP.all(promises);
  });
};

module.exports.getTripsForVehicle = function (id) {

  var summaryQuery = new azureStorage.TableQuery()
    .top(5)
    .where('PartitionKey eq ?', id);
  
  return queryEntities.call(tableService, nconf.get('trip_summaries_table_name'), summaryQuery, null)
  .then( function(result) {
    var promises = [];
  	
    result.entries.forEach(function (entity) {

      var tripQuery = new azureStorage.TableQuery()
        .where('PartitionKey eq ?', id)
        .and('RowKey gt ?', entity.StartTime._)
        .and('RowKey lt ?', entity.EndTime._);

      var promise = _getTripDataForQuery(entity, tripQuery);
      
      promises.push(promise);
    
    });

    return RSVP.all(promises);
  });
};