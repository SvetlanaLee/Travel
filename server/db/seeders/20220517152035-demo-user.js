'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Wick',
        email: 'john@wick.com',
        password: '1234',
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users');
  }
};
