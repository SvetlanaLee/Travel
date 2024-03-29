const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Road extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Like, Place, Star, Comment
    }) {
      Road.belongsTo(User, { foreignKey: 'userId' });
      Road.hasMany(Like, { foreignKey: 'roadId' });
      Road.hasMany(Place, { foreignKey: 'roadId' });
      Road.hasMany(Star, { foreignKey: 'roadId' });
      Road.hasMany(Comment, { foreignKey: 'roadId' });
    }
  }
  Road.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    from: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    destination: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    mapImg: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    discription: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    transportType: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    distance: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Road',
    tableName: 'Roads',
  });
  return Road;
};
