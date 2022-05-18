const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Road, Like, Star, Comment,
    }) {
      User.hasMany(Road, { foreignKey: 'userId' });
      User.hasMany(Like, { foreignKey: 'userId' });
      User.hasMany(Star, { foreignKey: 'userId' });
      User.hasMany(Comment, { foreignKey: 'userId' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
  });
  return User;
};
