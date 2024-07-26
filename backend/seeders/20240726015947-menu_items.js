'use strict';

 /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('menu_items', [
      ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('menu_items', null, {});
     
  }
};
