module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
      },
      placeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Places',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Stars');
  },
};
