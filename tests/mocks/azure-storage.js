var assert = require('assert');
var nconf = require('nconf');
nconf.env().file({ file: './config.json' });

var TableQuery = function() {
  
};
TableQuery.prototype.where = function(query, value) {
  assert.equal(typeof query, 'string');
  assert(value !== null);
  return this;
};
TableQuery.prototype.or = function(query, value) {
  assert.equal(typeof query, 'string');
  assert(value !== null);
  return this;
};
TableQuery.prototype.and = function(query, value) {
  assert.equal(typeof query, 'string');
  assert(value !== null);
  return this;
};
TableQuery.prototype.top = function(num, value) {
  assert.equal(typeof num, 'number');
  assert(value !== null);
  return this;
};

module.exports.createTableService = function() {
  
  return {
	
  	queryEntities: function(tableName, query, shouldBeNull, callback){
  		
  		assert.equal(typeof tableName, 'string');
  		assert(query instanceof TableQuery);
  		assert.equal(typeof callback, 'function');
  		
      if (tableName === nconf.get('trip_locations_table_name')) {
    		callback(null, {
          
    			entries: [
          {
            'PartitionKey': {
                '$': 'Edm.String',
                '_': 'WHADDUP'
            },
            'RowKey': {
                '$': 'Edm.String',
                '_': '1432659974407'
            },
            'Timestamp': {
                '$': 'Edm.DateTime',
                '_': '2015-06-01T18:30:29.570Z'
            },
            'Acceleration_Computed': {
                '_': 2.3
            },
            'Heading': {
                '_': 11.2
            },
            'Latitude': {
                '_': -122.469476
            },
            'Longitude': {
                '_': 37.79946
            },
            'MeasurementTime': {
                '$': 'Edm.Int64',
                '_': '1432659974407'
            },
            'Speed': {
                '_': 35.7
            },
            'Turn_Acceleration': {
                '_': 0.3
            },
            'Turn_Velcoity_Computed': {
                '_': 0.1
            },
            'Velocity_Computed': {
                '_': 35.7
            },
            '.metadata': {
                'etag': 'W/"datetime\'2015-06-01T18:30:29.5701383Z\'"'
            }
        },
        {
            'PartitionKey': {
                '$': 'Edm.String',
                '_': '54d01ed20eabba6304eded64'
            },
            'RowKey': {
                '$': 'Edm.String',
                '_': '1432659974412'
            },
            'Timestamp': {
                '$': 'Edm.DateTime',
                '_': '2015-06-01T18:30:30.324Z'
            },
            'Acceleration_Computed': {
                '_': 2.3
            },
            'Heading': {
                '_': 11.2
            },
            'Latitude': {
                '_': -122.469476
            },
            'Longitude': {
                '_': 37.79946
            },
            'MeasurementTime': {
                '$': 'Edm.Int64',
                '_': '1432659974412'
            },
            'Speed': {
                '_': 35.7
            },
            'Turn_Acceleration': {
                '_': 0.3
            },
            'Turn_Velcoity_Computed': {
                '_': 0.1
            },
            'Velocity_Computed': {
                '_': 35.7
            },
            '.metadata': {
                'etag': 'W/"datetime\'2015-06-01T18:30:30.3249232Z\'"'
            }
        },
        {
            'PartitionKey': {
                '$': 'Edm.String',
                '_': '54d01ed20eabba6304eded64'
            },
            'RowKey': {
                '$': 'Edm.String',
                '_': '1432659974417'
            },
            'Timestamp': {
                '$': 'Edm.DateTime',
                '_': '2015-06-01T18:30:29.599Z'
            },
            'Acceleration_Computed': {
                '_': 2.3
            },
            'Heading': {
                '_': 11.2
            },
            'Latitude': {
                '_': -122.469476
            },
            'Longitude': {
                '_': 37.79946
            },
            'MeasurementTime': {
                '$': 'Edm.Int64',
                '_': '1432659974417'
            },
            'Speed': {
                '_': 35.7
            },
            'Turn_Acceleration': {
                '_': 0.3
            },
            'Turn_Velcoity_Computed': {
                '_': 0.1
            },
            'Velocity_Computed': {
                '_': 35.7
            },
            '.metadata': {
                'etag': 'W/"datetime\'2015-06-01T18:30:29.599673Z\'"'
            }
        },
        {
            'PartitionKey': {
                '$': 'Edm.String',
                '_': '54d01ed20eabba6304eded64'
            },
            'RowKey': {
                '$': 'Edm.String',
                '_': '1432659974422'
            },
            'Timestamp': {
                '$': 'Edm.DateTime',
                '_': '2015-06-01T18:30:29.383Z'
            },
            'Acceleration_Computed': {
                '_': 2.3
            },
            'Heading': {
                '_': 11.2
            },
            'Latitude': {
                '_': -122.469476
            },
            'Longitude': {
                '_': 37.79946
            },
            'MeasurementTime': {
                '$': 'Edm.Int64',
                '_': '1432659974422'
            },
            'Speed': {
                '_': 35.7
            },
            'Turn_Acceleration': {
                '_': 0.3
            },
            'Turn_Velcoity_Computed': {
                '_': 0.1
            },
            'Velocity_Computed': {
                '_': 35.7
            },
            '.metadata': {
                'etag': 'W/"datetime\'2015-06-01T18:30:29.383147Z\'"'
            }
        }
    		]
    		});
      }
      else if (tableName === nconf.get('trip_summaries_table_name')) {
        callback(null, {
          entries: [
              {
                  'PartitionKey': {
                      '$': 'Edm.String',
                      '_': '54d01ed20eabba6304eded64'
                  },
                  'RowKey': {
                      '$': 'Edm.String',
                      '_': '1432659974402'
                  },
                  'Timestamp': {
                      '$': 'Edm.DateTime',
                      '_': '2015-06-01T18:30:29.714Z'
                  },
                  'Distance': {
                      '_': 31.32
                  },
                  'Duration': {
                      '_': '615486.0'
                  },
                  'EndLatitude': {
                      '_': -122.469476
                  },
                  'EndLongitude': {
                      '_': 37.79946
                  },
                  'EndTime': {
                      '$': 'Edm.Int64',
                      '_': '1432660589888'
                  },
                  'PrincipalId': {
                      '_': '54d01ed20eabba6304eded64'
                  },
                  'StartLatitude': {
                      '_': 37.639478
                  },
                  'StartLongitude': {
                      '_': -122.422837
                  },
                  'StartTime': {
                      '$': 'Edm.Int64',
                      '_': '1432659974402'
                  },
                  '.metadata': {
                      'etag': 'W/"datetime\'2015-06-01T18:30:29.7142206Z\'"'
                  }
              }
          ]
        });
      } else {
        throw 'mock azure-storage only expects configuration keys, \'trip_summaries_table_name\' or \'trip_locations_table_name\' as the tableName parameter';
      }
	  }
  };
};

module.exports.TableQuery = TableQuery;