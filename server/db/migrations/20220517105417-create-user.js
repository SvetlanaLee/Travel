module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT
      },     
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};
