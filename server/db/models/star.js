const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Place }) {
      Star.belongsTo(User, { foreignKey: 'userId' });
      Star.belongsTo(Place, { foreignKey: 'placeId' });
    }
  }
  Star.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    mark: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    placeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Places',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Star',
    tableName: 'Stars',
  });
  return Star;
};
