module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
      },
      from: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      destination: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      mapImg: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      discription: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      transportType: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      distance: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Roads');
  },
};
