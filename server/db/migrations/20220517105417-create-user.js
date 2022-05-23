module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      photo: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      aboutMe: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      city: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      dateOfBirth: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      vk: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      telegram: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
