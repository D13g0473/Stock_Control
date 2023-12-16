const sequelize = require('./sequelize.js');

const client = require('../models/client');
const bill = require('../models/bill');
const account = require('../models/account');
const product = require('../models/product');
const sale = require('../models/sale');
const price = require('../models/price');
const encompasse = require('../models/encompasse');
const unitofmeasurement = require('../models/unitofmeasurement');
const models = 
        {
            unitofmeasurement,
            encompasse,
            price,
            sale,
            product,
            account,
            bill,
            client,
        }

Object.keys(models).forEach((modelName) => {
if (models[modelName].associate) 
    {
        models[modelName].associate(models);
    }
});        

sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });


  module.exports = models;