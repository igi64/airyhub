'use strict';

var config = require('./server/config/config');
var configKoa = require('./server/config/koa');
var koa = require('koa');
var co = require('co');

var app = koa();

module.exports = app;

app.init = co(function *() {
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