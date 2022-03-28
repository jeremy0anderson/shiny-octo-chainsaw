const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Role model
class Role extends Model {}

// define table columns and configuration
Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    loyalty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ability: {
      type: DataTypes.STRING,
    },
    win_1: {
      type: DataTypes.STRING,
    },
    win_2: {
      type: DataTypes.STRING
    },
    king_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'king',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role'
  }
);

module.exports = Role;