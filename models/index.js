const Host = require('./Host');
const Game = require('./Game');
const Player = require('./Player');
const Role = require('./Role');
const King = require('./King');


// create associations
Host.belongsTo(Game, {
  foreignKey: 'game_id'
});

Host.hasMany(Player, {
  foreignKey: 'host_id'
});

Player.belongsTo(Host, {
  foreignKey: 'host_id'
});

Player.belongsTo(Game, {
  foreignKey: 'game_id'
})

Player.hasOne(Role, {
  foreignKey: 'role_id'
});

Role.hasMany(Player, {
  foreignKey: 'role_id'
});

Role.belongsTo(King, {
  foreignKey: 'king_id'
});

module.exports = { Player, Host, Role, Game, King };
