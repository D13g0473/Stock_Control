const mysql = require('mysql2/promise');
const config = require('./config.json');

async function get_connection() {
  const connection = await mysql.createConnection(config.database);
  return connection;
}

module.exports = { get_connection };