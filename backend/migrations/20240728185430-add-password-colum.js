'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Customers', 'passwordDigest', {
      type: Sequelize.DataTypes.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Customers', 'passwordDigest');
  }
};
