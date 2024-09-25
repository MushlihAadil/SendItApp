'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Package.init({
    senderName: DataTypes.STRING,
    senderAddress: DataTypes.STRING,
    receiverName: DataTypes.STRING,
    receiverAddress: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
    expeditionId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};