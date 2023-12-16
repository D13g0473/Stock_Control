const path = require('path');
const config = require('./src/config.json');
module.exports = {
  development: {
    username: config.database.user,
    password: config.database.password,
    database: config.database.database,
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
      timestamps: false,
    },
    seederStorage: 'sequelize',
    migrationStorage: 'sequelize',
    seederStorageTableName: 'sequelize_seeders',
    migrationStorageTableName: 'sequelize_migrations',
  },
  test: {
    // Configuración para entorno de pruebas
  },
  production: {
    username: config.database.user,
    password: config.database.password,
    database: config.database.database,
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
      timestamps: false,
    },
    seederStorage: 'sequelize',
    migrationStorage: 'sequelize',
    seederStorageTableName: 'sequelize_seeders',
    migrationStorageTableName: 'sequelize_migrations',
  }
};
