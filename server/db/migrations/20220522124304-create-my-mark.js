'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MyMarks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Places'
        }
      },
      title: {
        type: Sequelize.TEXT,
      },
      info: {
        type: Sequelize.TEXT,
      },
      categoria: {
        type: Sequelize.TEXT,
      },
      geometry: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
      },
      preset: {
        type: Sequelize.TEXT,
      },
      adress: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('MyMarks');
  }
};
