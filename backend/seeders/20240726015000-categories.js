'use strict';

 /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('categories', [
      ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
     
  }
};
