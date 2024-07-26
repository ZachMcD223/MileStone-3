'use strict';

 /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('orders', [
      ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('orders', null, {});
     
  }
};

