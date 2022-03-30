const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Room model
class Room extends Model {}

// define table columns and configuration
Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'room',
  }
);
