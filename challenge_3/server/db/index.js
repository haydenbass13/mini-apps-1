var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: "POS"
});

connection.connect();

module.exports = connection;