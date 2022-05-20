'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roads',
        }
      },
      title: {
        type: Sequelize.TEXT
      },
      info: {
        type: Sequelize.TEXT
      },
      categoria: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.TEXT
      },
      geometry: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
      },
      preset: {
        type: Sequelize.TEXT
      },
      adress: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Places');
  }
};
