'use strict';

var logger = require('koa-logger');
var config = require('./config');

module.exports = function (app) {
  // middleware configuration
  if (config.env !== 'test') {
    app.use(logger());
  }
};