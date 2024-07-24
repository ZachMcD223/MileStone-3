'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_items.init({
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    quantity: { 
    type:DataTypes.STRING,
    allowNull: false
    },
    item_price: {
      type: DataTypes.STRING,
      allowNull: false
    },


    order_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    item_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order_items',
    tableName: 'order_items',
    timestamps: false
    
  });
  return Order_items;
};