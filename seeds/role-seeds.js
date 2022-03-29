const sequelize = require('../config/connection');
const { Host, Player, Role } = require('../models');

const roleData = [
  {
    "role": "Blue King",
    "loyalty": "Blue King",
    "ability": "Decide who gets exported to the other Kingdom.",
    "win1": "Survive Yourself",
    "win2": "Kill the opposing King",
    "king_id": 1
  },
  {
    "role": "Red King",
    "loyalty": "Red King",
    "ability": "Decide who gets exported to the other Kingdom.",
    "win1": "Survive Yourself",
    "win2": "Kill the opposing King",
    "king_id": 2
  },
  {
    "role": "Guard",
    "loyalty": "Blue King",
    "ability": "Protect Your King from the Assassin.",
    "win1": "Your King Survives",
    "win2": "You end in the same room as Your King",
    "king_id": 1
  },
  {
    "role": "Guard",
    "loyalty": "Red King",
    "ability": "Protect Your King from the Assassin.",
    "win1": "Your King Survives",
    "win2": "You end in the same room as Your King",
    "king_id": 2
  },
  {
    "role": "Assassin",
    "loyalty": "Blue King",
    "ability": "Assassinate the Other King if the Guard is Absent or Distracted.",
    "win1": "Your King Survives",
    "win2": "The Other King is killed",
    "king_id": 1
  },
  {
    "role": "Assassin",
    "loyalty": "Red King",
    "ability": "Assassinate the Other King if the Guard is Absent or Distracted.",
    "win1": "Your King Survives",
    "win2": "The Other King is killed",
    "king_id": 2
  },
  {
    "role": "Successor",
    "loyalty": "Grey",
    "ability": "Know the identity of both Assassins.",
    "win1": "Both Kings are killed",
    "win2": "none",
    "king_id": 3
  },
  {
    "role": "The Queen Mother",
    "loyalty": "Grey",
    "ability": "Konw the identity of both Assassins.",
    "win1": "Both Kings survive",
    "win2": "none"
  },
];

const seedRoles = () => Role.bulkCreate(roleData, {individualHooks: true});

module.exports = seedRoles;