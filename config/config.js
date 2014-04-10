'use strict';

var path = require('path'),
  _ = require('lodash');

var baseConfig = {
  env: process.env.NODE_ENV || 'development',
  server: {
    secure: false,
    http_port: 80,
    https_port: 443,
    host: 'localhost.airyhub.org',
    base_url: function () {
      return (this.secure ? 'https://' : 'http://') + this.host;
    },
    cookie_parser: 'your cookie secret here',
    session_secret: 'your session secret here'
  },
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'airyhub',
    password: 'apassword',
    database: 'airyhub'
  }
}

var platformConfig = {

}

// override the base configuration with the platform specific values
_.merge(baseConfig, platformConfig[baseConfig.env]);
module.exports = baseConfig;
