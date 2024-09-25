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
      Package.belongsTo(models.Expedition, {
        foreignKey: 'expeditionId'
      })
    }
  }
  Package.init({
    senderName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Please input your name!" },
        notEmpty: { args: true, msg: "Please input your name!" },
      }
    },
    senderAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Please input your address!" },
        notEmpty: { args: true, msg: "Please input your address!" },
      }
    },
    receiverName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Please input your receiver name!" },
        notEmpty: { args: true, msg: "Please input your receiver name!" },
      }
    },
    receiverAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Please input your receiver address!" },
        notEmpty: { args: true, msg: "Please input your receiver address!" },
      }
    },
    deliveryDate: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    expeditionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Package is on delivery."
    }
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};