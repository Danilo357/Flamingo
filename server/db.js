const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "",
  database: "Flamingo",
  host: "localhost"
});

module.export = pool;
