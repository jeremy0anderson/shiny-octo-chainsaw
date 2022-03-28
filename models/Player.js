<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Player model
class Player extends Model {}

// define table columns and configuration
Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_code: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'game_code'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'role',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
  }
);

module.exports = Player;
=======
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
//
// // create our Player model
// class Player extends Model {}
//
// // define table columns and configuration
// Player.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     game_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'game',
//         key: 'code'
//       }
//     },
//     role_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'role',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'player',
//   }
// );
//
// module.exports = Player;
>>>>>>> 4f7058a35e6d7329d8fc89f65b80fea707e9ccd3
