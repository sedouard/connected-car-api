var assert = require('assert');
var nconf = require('nconf');
nconf.env().file({ file: './config.json' });

var nitrogen = {
    Service: function Service(config) {
      assert(typeof config === 'object');
    },
    
    Principal: function Principal() {
        this.user = 'testuser';
        this.name = 'testuser';
        this. email = 'test@microsoft.com';
        this.api_key = 'askjflhawlqkjfh';
        this.password = 'p@ssw0rd';
        this.updated_at = (new Date(Date.now())).toString();
        this.created_at = (new Date(Date.now() - 3000)).toString();
        this.id = 'abc-123';
    }
};

nitrogen.Principal.find = function (session, options, sortOptions, callback) {

    assert(session.principal.constructor, 'Principal');
    assert(typeof options === 'object');
    assert(typeof sortOptions === 'object');
    assert(typeof callback === 'function');
    return callback(null, [
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418359935 - Vehicle 148',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418359935'
          ],
          'last_connection': '2015-06-01T18:54:09.387Z',
          'updated_at': '2015-06-01T18:54:09.458Z',
          'created_at': '2015-04-16T22:54:29.595Z',
          'id': '55303da51cc25c0100e25ecc',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418381404 - Vehicle 152',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418394204'
          ],
          'last_connection': '2015-06-01T18:53:57.329Z',
          'updated_at': '2015-06-01T18:53:57.382Z',
          'created_at': '2015-04-17T18:59:20.779Z',
          'id': '5531580839d8c60100436c34',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'email': 'car@nitrogen.io',
          'last_ip': '167.220.27.29',
          'name': 'Connected Car',
          'type': 'user',
          'members': [],
          'sensors': [],
          'tags': [],
          'last_connection': '2015-06-01T18:53:49.821Z',
          'updated_at': '2015-06-01T18:53:49.832Z',
          'created_at': '2015-02-03T01:05:22.852Z',
          'id': '54d01ed20eabba6304eded64',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418367580',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418367580'
          ],
          'last_connection': '2015-06-01T13:50:29.179Z',
          'updated_at': '2015-06-01T13:50:29.190Z',
          'created_at': '2015-05-26T00:22:27.429Z',
          'id': '5563bcc31cebc901005c3672',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': 'Toyota Prius 3D7MR48C15G786641',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'sends:location'
          ],
          'last_connection': '2015-05-30T02:43:12.243Z',
          'updated_at': '2015-05-30T02:43:12.253Z',
          'created_at': '2015-02-03T01:06:26.706Z',
          'id': '54d01f120eabba6304eded8b',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418418045 - Vehicle 150',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418418045'
          ],
          'last_connection': '2015-05-29T21:57:14.447Z',
          'updated_at': '2015-05-29T21:57:14.459Z',
          'created_at': '2015-04-17T22:15:04.622Z',
          'id': '553185e8d0a22c010031a6b3',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418383195 - Vehicle 151',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418383195'
          ],
          'last_connection': '2015-05-29T21:34:25.332Z',
          'updated_at': '2015-05-29T21:34:25.450Z',
          'created_at': '2015-04-17T20:36:51.054Z',
          'id': '55316ee3d0a22c010031a598',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418368348',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418368348'
          ],
          'last_connection': '2015-05-26T00:42:39.850Z',
          'updated_at': '2015-05-26T00:42:39.875Z',
          'created_at': '2015-05-14T15:20:39.291Z',
          'id': '5554bd47439c5a0100682571',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418381915 (Tim\'s Car)',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418381915'
          ],
          'last_connection': '2015-05-22T04:40:05.849Z',
          'updated_at': '2015-05-22T04:40:05.879Z',
          'created_at': '2015-04-28T16:13:27.257Z',
          'id': '553fb1a703d22f01001671cb',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': 'testcar0',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418362203'
          ],
          'last_connection': '2015-05-21T22:11:41.170Z',
          'updated_at': '2015-05-21T22:11:41.214Z',
          'created_at': '2015-04-16T22:27:45.551Z',
          'id': '55303761d0a22c010031a23d',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418407515',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418407515'
          ],
          'last_connection': '2015-05-21T19:34:13.567Z',
          'updated_at': '2015-05-21T19:34:13.649Z',
          'created_at': '2015-04-17T22:14:40.793Z',
          'id': '553185d01cc25c0100e264c2',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418362203',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418362203'
          ],
          'last_connection': '2015-05-17T22:18:12.117Z',
          'updated_at': '2015-05-17T22:18:12.187Z',
          'created_at': '2015-05-14T00:12:44.175Z',
          'id': '5553e87cdffbee0100a60174',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '63.249.94.5',
          'name': '3418382974',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418382974'
          ],
          'last_connection': '2015-05-15T17:54:10.722Z',
          'updated_at': '2015-05-15T17:54:11.087Z',
          'created_at': '2015-05-15T17:54:10.722Z',
          'id': '555632c23959110100403789',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3419359935',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3419359935'
          ],
          'last_connection': '2015-05-15T17:37:55.746Z',
          'updated_at': '2015-05-15T17:37:55.995Z',
          'created_at': '2015-05-09T01:50:38.091Z',
          'id': '554d67ee52d4d901009db915',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar9',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar9'
          ],
          'last_connection': '2015-05-15T00:53:04.373Z',
          'updated_at': '2015-05-15T00:53:04.562Z',
          'created_at': '2015-05-15T00:53:04.373Z',
          'id': '55554370439c5a010068293b',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar8',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar8'
          ],
          'last_connection': '2015-05-15T00:49:00.504Z',
          'updated_at': '2015-05-15T00:49:00.703Z',
          'created_at': '2015-05-15T00:49:00.504Z',
          'id': '5555427c06c26301002f8e89',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar7',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar7'
          ],
          'last_connection': '2015-05-15T00:48:56.364Z',
          'updated_at': '2015-05-15T00:48:56.513Z',
          'created_at': '2015-05-15T00:48:56.364Z',
          'id': '555542783959110100402fe2',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar6',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar6'
          ],
          'last_connection': '2015-05-15T00:48:52.528Z',
          'updated_at': '2015-05-15T00:48:53.007Z',
          'created_at': '2015-05-15T00:48:52.528Z',
          'id': '555542743959110100402f9b',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar5',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar5'
          ],
          'last_connection': '2015-05-15T00:48:48.890Z',
          'updated_at': '2015-05-15T00:48:49.096Z',
          'created_at': '2015-05-15T00:48:48.890Z',
          'id': '55554270439c5a01006828c7',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar4',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar4'
          ],
          'last_connection': '2015-05-15T00:48:45.026Z',
          'updated_at': '2015-05-15T00:48:45.178Z',
          'created_at': '2015-05-15T00:48:45.026Z',
          'id': '5555426d3959110100402f54',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar3',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar3'
          ],
          'last_connection': '2015-05-15T00:48:40.358Z',
          'updated_at': '2015-05-15T00:48:41.228Z',
          'created_at': '2015-05-15T00:48:40.358Z',
          'id': '55554268dffbee0100a60472',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar2',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:testcar2'
          ],
          'last_connection': '2015-05-15T00:48:36.585Z',
          'updated_at': '2015-05-15T00:48:36.816Z',
          'created_at': '2015-05-15T00:48:36.585Z',
          'id': '5555426406c26301002f8e42',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '98.247.39.95',
          'name': 'testcar1',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:00000001'
          ],
          'last_connection': '2015-05-15T00:03:23.589Z',
          'updated_at': '2015-05-15T00:04:50.832Z',
          'created_at': '2015-05-15T00:03:23.589Z',
          'id': '555537cb06c26301002f8cd5',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418367580',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418367580'
          ],
          'last_connection': '2015-05-12T20:55:49.282Z',
          'updated_at': '2015-05-12T20:55:49.290Z',
          'created_at': '2015-04-16T22:43:51.248Z',
          'id': '55303b2739358d010003a1c2',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.55.189',
          'name': '3418384732',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418384732'
          ],
          'last_connection': '2015-05-12T19:46:05.164Z',
          'updated_at': '2015-05-12T19:46:05.197Z',
          'created_at': '2015-04-17T19:38:09.644Z',
          'id': '55316121d0a22c010031a551',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.48.204',
          'name': '3418366044',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418366044'
          ],
          'last_connection': '2015-04-28T19:59:18.942Z',
          'updated_at': '2015-04-28T19:59:18.956Z',
          'created_at': '2015-04-16T22:02:22.407Z',
          'id': '5530316e39d8c601004367e5',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '63.249.94.5',
          'name': '3418366300',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418366300'
          ],
          'last_connection': '2015-04-28T16:00:49.272Z',
          'updated_at': '2015-04-28T16:00:49.432Z',
          'created_at': '2015-04-28T16:00:49.272Z',
          'id': '553faeb14412ad010037c19d',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.48.204',
          'name': '3419359935',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3419359935'
          ],
          'last_connection': '2015-04-28T00:23:16.855Z',
          'updated_at': '2015-04-28T00:23:16.874Z',
          'created_at': '2015-04-27T21:59:52.880Z',
          'id': '553eb158152f1a0100f3ca68',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.19',
          'name': '3418399358',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418399358'
          ],
          'last_connection': '2015-04-17T22:35:39.261Z',
          'updated_at': '2015-04-17T22:35:39.493Z',
          'created_at': '2015-04-17T22:35:39.261Z',
          'id': '55318abb1cc25c0100e26524',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.19',
          'name': '3418367357',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418367357'
          ],
          'last_connection': '2015-04-17T22:35:13.704Z',
          'updated_at': '2015-04-17T22:35:13.983Z',
          'created_at': '2015-04-17T22:35:13.704Z',
          'id': '55318aa139d8c60100436f88',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.19',
          'name': '3418384476',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418384476'
          ],
          'last_connection': '2015-04-17T22:14:11.497Z',
          'updated_at': '2015-04-17T22:14:12.139Z',
          'created_at': '2015-04-17T22:14:11.497Z',
          'id': '553185b339358d010003a7c2',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.19',
          'name': '3418380635',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418380635'
          ],
          'last_connection': '2015-04-17T22:13:45.890Z',
          'updated_at': '2015-04-17T22:13:46.054Z',
          'created_at': '2015-04-17T22:13:45.890Z',
          'id': '55318599bb02fd01002db08b',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.19',
          'name': '3418368348',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418368348'
          ],
          'last_connection': '2015-04-17T20:38:01.658Z',
          'updated_at': '2015-04-17T20:38:01.868Z',
          'created_at': '2015-04-17T20:38:01.658Z',
          'id': '55316f2939358d010003a5e3',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.19',
          'name': '3418369921',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418369921'
          ],
          'last_connection': '2015-04-17T18:47:44.334Z',
          'updated_at': '2015-04-17T18:47:44.557Z',
          'created_at': '2015-04-17T18:47:44.334Z',
          'id': '5531555039358d010003a4db',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '167.220.23.17',
          'name': '3418394204',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418394204'
          ],
          'last_connection': '2015-04-16T22:49:32.262Z',
          'updated_at': '2015-04-16T22:49:32.481Z',
          'created_at': '2015-04-16T22:49:32.262Z',
          'id': '55303c7c39d8c6010043683c',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.48.204',
          'name': 'Toyota Dongle 3418407515',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418407515'
          ],
          'last_connection': '2015-04-16T21:43:12.726Z',
          'updated_at': '2015-04-16T21:43:12.744Z',
          'created_at': '2015-03-17T21:08:19.121Z',
          'id': '550897c3cda3f36e04055a82',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.48.204',
          'name': '3418381915',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418381915'
          ],
          'last_connection': '2015-04-14T01:18:50.969Z',
          'updated_at': '2015-04-14T01:18:51.035Z',
          'created_at': '2015-04-14T00:57:19.738Z',
          'id': '552c65efbb02fd01002da99d',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '191.234.48.204',
          'name': '3418369921',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418369921'
          ],
          'last_connection': '2015-03-25T01:35:05.233Z',
          'updated_at': '2015-03-25T01:35:05.256Z',
          'created_at': '2015-03-24T07:20:32.061Z',
          'id': '55111040c8ac5e2a1bcfaeb4',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '106.140.29.103',
          'name': '3418380635',
          'type': 'device',
          'members': [],
          'sensors': [],
          'tags': [
              'id:3418380635'
          ],
          'last_connection': '2015-03-24T06:42:57.071Z',
          'updated_at': '2015-03-24T06:42:58.229Z',
          'created_at': '2015-03-24T06:42:57.071Z',
          'id': '55110771c8ac5e2a1bcfad72',
          'nickname': 'default'
      },
      {
          'api_key': '54d00c160eabba6304edec9f',
          'claim_code': null,
          'last_ip': '173.10.121.193',
          'name': 'Fleet Management App',
          'type': 'app',
          'members': [],
          'sensors': [],
          'tags': [],
          'last_connection': '2015-02-03T01:17:31.455Z',
          'updated_at': '2015-02-03T01:17:31.600Z',
          'created_at': '2015-02-03T01:17:31.454Z',
          'id': '54d021ab0eabba6304edee43',
          'nickname': 'default'
      }
    ]);
};
nitrogen.Service.prototype.resume = function () {
    throw 'not implemented';
};

nitrogen.Service.prototype.authenticate = function (user, callback) {
  console.log('CALLING AUTH');
    return callback(null, { 
        principal: new nitrogen.Principal()
    }, new nitrogen.Principal() );
};

nitrogen.User = function ( user ) {
    this.user = user;        
};

module.exports = nitrogen;
