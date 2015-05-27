// A utitlity for filling up the trip summaries and trip locations tables with fake data.
var nconf = require('nconf');
var RSVP = require('rsvp');
var nitrogenUtils = require('./lib/nitrogen-utils');
nconf.env().file({ file: './config.json' });
var azureStorage = require('azure-storage');

var tableService = azureStorage.createTableService(nconf.get('storage_account_name'), nconf.get('storage_account_key'));
tableService.insertEntity = RSVP.denodeify(tableService.insertEntity);

var entGen = azureStorage.TableUtilities.entityGenerator;

nitrogenUtils.authenticate()
.then(function(){
  return nitrogenUtils.getAllDevices();
})
.then(function(vehicles) {
	var promises = [];
	var baseTripId = 1432659974402;
	vehicles.forEach(function(vehicle) {
		
		var entity = {
		  PartitionKey: entGen.String(vehicle.id),
		  RowKey: entGen.String(baseTripId.toString()),
		  Distance: entGen.Double(31.32),
		  Duration: entGen.Double(615486),
		  EndLatitude: entGen.Double(-122.469476),
		  EndLongitude: entGen.Double(37.79946),
		  EndTime: entGen.Int64(1432660589888),
		  PrincipalId: entGen.String(vehicle.id),
			StartLatitude: entGen.Double(37.639478),
			StartLongitude: entGen.Double(-122.422837),
			StartTime: entGen.Int64(baseTripId.toString()),
		};
		console.log('pushing entity');
		promises.push(tableService.insertEntity(nconf.get('trip_summaries_table_name'), entity));
		var baseStartTime = 1432659974402;
		for(var i = 0; i < 5; i += 1) {
			var tripLocationEntity = {
				PartitionKey: entGen.String(vehicle.id),
			  RowKey: entGen.String(baseStartTime.toString()),
			  Acceleration_Computed: entGen.Double(2.3),
			  Heading: entGen.Double(11.2),
			  Latitude: entGen.Double(-122.469476),
			  Longitude: entGen.Double(37.79946),
			  MeasurementTime: entGen.Int64(baseStartTime),
			  Speed: entGen.Double(35.7),
				Turn_Acceleration: entGen.Double(0.3),
				Turn_Velcoity_Computed: entGen.Double(0.1),
				Velocity_Computed: entGen.Double(35.7),
			};
			baseStartTime += 5;	
			console.log('pushing entity...');
			console.log('%j', tripLocationEntity);
			promises.push(tableService.insertEntity(nconf.get('trip_locations_table_name'), tripLocationEntity));
		}
		baseTripId += 1;
	});
	
	return RSVP.all(promises);
		
})
.then(function(result, response) {
	console.log('%j', result);
	console.log('%j', response);
})
.catch(function(err){
	console.log('ERROR');
	console.log(err);
});