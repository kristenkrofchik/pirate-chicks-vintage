'use strict'

/** Database setup for pirate-chicks */
const { Client } = require("pg");
const { getDatabase } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabase(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: getDatabase()
  });
}

db.connect();

module.exports = db;