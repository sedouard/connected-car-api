var nitrogen = require('nitrogen');
var RSVP = require('rsvp');
var nconf = require('nconf');
nconf.file({ file: './config.json' });
var find = RSVP.denodeify(nitrogen.Principal.find);
var nitroSession = null;
var config = {
  host: nconf.get('nitrogen_host'),
  protocol: nconf.get('nitrogen_protocol'),
  http_port: nconf.get('nitrogen_port'),
  log_levels: ['warn', 'error']
};

var service = new nitrogen.Service(config);

service.authenticate = RSVP.denodeify(service.authenticate);

module.exports.authenticate = function() {
  return service.authenticate(new nitrogen.User({
    nickname: 'current',
    email: nconf.get('nitrogen_email'),
    password: nconf.get('nitrogen_password')
  }))
  .then(function(session) {
    console.log('setting session...');
    nitroSession = session;
  });
};

module.exports.getAllDevices = function() {
  var options = {
      skip: 0
  };
  return find(nitroSession, {}, options);
};