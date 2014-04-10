var mysqlco = require('mysql-co');
var config = require('./config');

module.exports = mysqlco;

mysqlco.connect = function *() {
  var pool = mysqlco.createPool({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
  });

  var db = yield pool.getConnection();
  console.log(
    yield [
      db.query("select sleep(1) as qqq"),
      db.query("select sleep(1) as qqq"),
      db.execute("select 1+?", [123.45])
    ]
  );
  db.release();
};