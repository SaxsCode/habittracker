import mysql from 'mysql2';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "saxroot"
});

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected");
  con.query("CREATE DATABASE habits", function(err, result) {
  if (err) {
    throw err;
  }
    console.log("Database created");
  });
});
