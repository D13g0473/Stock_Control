const { Sequelize } = require('sequelize');
const config = require('./config.json');
const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: config.APP_HOST,
  username: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME,
});

module.exports = sequelize;