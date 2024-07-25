'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_items', {
      order_item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      item_price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      item_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_items');
  }
};