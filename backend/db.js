'use strict'

/** Database setup for pirate-chicks */
const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///pirateChicksTest";
} else {
  DB_URI = "postgresql:///pirateChicks";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;