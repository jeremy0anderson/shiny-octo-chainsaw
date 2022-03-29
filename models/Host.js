const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our Host model
class Host extends Model {
  // set up method to run on instance data (per host) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
};

// define table columns and configuration
Host.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id'
      }
    },
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newHostData) {
        newHostData.password = await bcrypt.hash(newHostData.password, 10);
        return newHostData;
      },

      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedHostData) {
        updatedHostData.password = await bcrypt.hash(
          updatedHostData.password,
          10
        );
        return updatedHostData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'host',
  }
);

module.exports = Host;
