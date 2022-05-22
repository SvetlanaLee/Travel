'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyMark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MyMark.init({
    roadId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    info: DataTypes.TEXT,
    categoria: DataTypes.TEXT,
    geometry: DataTypes.ARRAY(DataTypes.FLOAT),
    preset: DataTypes.TEXT,
    adress: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MyMark',
  });
  return MyMark;
};