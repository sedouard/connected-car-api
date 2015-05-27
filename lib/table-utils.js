var nconf = require('nconf');
var RSVP = require('rsvp');
nconf.file({ file: './config.json' });
var azureStorage = require('azure-storage');

var tableService = azureStorage.createTableService(nconf.get('storage_account_name'), nconf.get('storage_account_key'));

module.exports.getTripsForVehicle = function (id) {

  var summaryQuery = new azureStorage.TableQuery()
    .top(5)
    .where('PartitionKey eq ?', id);
  
  // use promise instead
  var tempFunc = tableService.queryEntities;
  tableService.queryEntities = RSVP.denodeify(tableService.queryEntities);


  return tableService.queryEntities(nconf.get('trip_summaries_table_name'), summaryQuery, null)
  .then( function(result, response) {
    var promises = [];
  	
    result.entries.forEach(function (entity) {

      var tripQuery = new azureStorage.TableQuery()
        .where('PartitionKey eq ?', id)
        .and('RowKey gt ?', entity.StartTime._)
        .and('RowKey lt ?', entity.EndTime._);

      var promise = tableService.queryEntities(nconf.get('trip_locations_table_name'), tripQuery, null)
      .then(function(result, response) {
        var trip = {
          events: []
        };
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
          
          trip.events.push(event);
          trip.id = entity.RowKey._;
          trip.type = 'trip';
        });
        
        return trip;
      });
      
      promises.push(promise);
    
    });
   
    return RSVP.all(promises);
  })
  .finally(function() {
    // restore original function
    tableService.queryEntities = tempFunc;
  });
}
