module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Wick',
        email: 'john@wick.com',
        password: '1234',
      }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
