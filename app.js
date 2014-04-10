'use strict';

var config = require('./config/config');
var mysql = require('./config/mysql');
var configKoa = require('./config/koa');
var koa = require('koa');
var co = require('co');

var app = koa();

module.exports = app;

app.init = co(function *() {
  // mysql
  yield mysql.connect();

  // config koa
  configKoa(app);

  // create http server and start listening for requests
  app.server = app.listen(config.server.http_port);
  console.log('AiryHub listening on port ' + config.server.http_port);
});

app.use(function *() {
  this.body = 'Hello World';
});

// auto init if this app is not being initialized by another module (i.e. using require('./app').init();)
if (!module.parent) {
  app.init();
}