'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Companion.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Companion.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      }
    },
    open: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    info: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    cityFrom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    cityWhere: {
      allowNull: false,
      type: DataTypes.STRING
    },
    start: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    end: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    createdAt: {
      type: DataTypes.DATEONLY
    },
    updatedAt: {
      type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'Companion',
    tableName: 'Companions',
  });
  return Companion;
};
