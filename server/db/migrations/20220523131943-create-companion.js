'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        }
      },
      open: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      info: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      cityFrom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cityWhere: {
        allowNull: false,
        type: Sequelize.STRING
      },
      start: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      end: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companions');
  }
};
