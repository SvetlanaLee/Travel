'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Road, Star }) {
      Place.belongsTo(Road, { foreignKey: 'roadId' });
      Place.hasMany(Star, { foreignKey: 'placeId' });
    }
  }
  Place.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    roadId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roads',
      }
    },
    title: {
      type: DataTypes.TEXT
    },
    info: {
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    },
    geometry: {
      type: DataTypes.ARRAY(DataTypes.FLOAT)
    },
    preset: {
      type: DataTypes.TEXT
    },
    adress: {
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Place',
    tableName: 'Places',
  });
  return Place;
};
