'use strict';

 /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('customers', [
      ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('customers', null, {});
     
  }
};
