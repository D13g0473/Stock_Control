'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bill.belongsTo(models.Client, { foreignKey: 'id_client' });
    }
  }
  Bill.init({
    client_id: DataTypes.INTEGER,
    date_of_issue: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};