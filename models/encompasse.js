'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Encompasse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Encompasse.init({
    account_id: DataTypes.INTEGER,
    bill_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Encompasse',
  });
  return Encompasse;
};