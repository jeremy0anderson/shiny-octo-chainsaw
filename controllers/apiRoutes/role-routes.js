const router = require('express').Router();
const { Host, Player, Role, Room } = require('../../models');

router.get('/', (req, res) => {
  Role.findAll()
    .then((dbRoleData) => res.json(dbRoleData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Role.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRoleData) => {
      if (!dbRoleData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }
      res.json(dbRoleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Role.create({
    title: req.body.title,
    loyalty: req.body.loyalty,
    ability: req.body.ability,
    win1: req.body.win1,
    win2: req.body.win2,
    room_id: req.body.room_id,
  })
    .then((dbPlayerData) => res.json(dbPlayerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Role.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPlayerData) => {
      if (!dbPlayerData[0]) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Role.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPlayerData) => {
      if (!dbPlayerData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
