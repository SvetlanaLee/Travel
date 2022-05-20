'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        geometry: [55.861289, 49.217559],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  }
};
