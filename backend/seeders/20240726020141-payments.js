'use strict';

 /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('payments', [
      ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('payments', null, {});
     
  }
};
