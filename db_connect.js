var mysql = require('mysql');

var con = mysql.createConnection({
  host: "NodeDB@localhost:3306",
  user: "root",
  password: "QWERqwer!@#$1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
