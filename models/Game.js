const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Game model
class Game extends Model {}

// define table columns and configuration
Game.init(
    {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;
