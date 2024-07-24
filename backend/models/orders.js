'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
  },
}, {
    sequelize,
    modelName: 'Orders',
    tableName: 'orders',
    timestamps: false
  });
  return Orders;
};