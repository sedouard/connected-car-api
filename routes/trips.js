var express = require('express');
var router = express.Router();
var nconf = require('nconf');
nconf.file({ file: './config.json' });

/* GET home page. */
router.get('/:id', function (req, res) {

    if(!req.params.id) {
        return res.send(400);
    }
    
    res.send(200, {
    'data': [
        {
            'id': 'acf3ba91-8ee0-4b64-814a-52df6bdad442',
            'type': 'trip',
            'trip_events': [
                {
                    'id': '553ac599cb49af5c772f9983',
                    'event_type': 'direction_change',
                    'type': 'event',
                    'timestamp': '2014-06-27T03:28:35 +07:00',
                    'speed': 8,
                    'location': {
                        'id': '13412',
                        'latitude': 56.649237,
                        'longitude': 136.74491,
                        'direction': 51,
                        'altitude': 681
                    }
                },
                {
                    'id': '553ac599685144ba00e7f8cd',
                    'event_type': 'engine_stop',
                    'type': 'event',
                    'timestamp': '2014-05-22T07:05:24 +07:00',
                    'speed': 3,
                    'location': {
                        'id': '13413',
                        'latitude': -21.687184,
                        'longitude': -77.175881,
                        'direction': 158,
                        'altitude': 9
                    }
                }
            ],
            'links': {
                'self': 'http://localhost:3000/vehicles/553ac59934dff597a9708c71/trip/acf3ba91-8ee0-4b64-814a-52df6bdad442',
                'driver': {
                    'related': 'http://localhost:3000/drivers/acf3ba91-8ee0-4b64-814a-52df6bdad442'
                }
            }
        }
    ]
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
