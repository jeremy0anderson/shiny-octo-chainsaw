const Host = require('./Host');
const Game = require('./Game');
const Player = require('./Player');
const Role = require('./Role');
const Room = require('./Room');


// // create associations
// Host.belongsTo(Game, {
//   foreignKey: 'game_id'
// });

// Host.hasMany(Player, {
//   foreignKey: 'host_id'
// });

// Player.hasOne(Host, {
//   foreignKey: 'host_id'
// });

// Player.belongsTo(Game, {
//   foreignKey: 'game_id'
// })

// Player.hasOne(Role, {
//   foreignKey: 'role_id'
// });

// Room.hasMany(Player, {
//   foreignKey: 'room_id'
// })

module.exports = { Player, Host, Role, Game, Room };
