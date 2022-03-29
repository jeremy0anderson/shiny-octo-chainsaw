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
    title: {
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
    win1: {
      type: DataTypes.STRING,
    },
    win2: {
      type: DataTypes.STRING
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'room',
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