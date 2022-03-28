const router = require('express').Router();
const { Host, Player, Role } = require('../../models');

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
    player_name: req.body.name,
    // game_id: req.body.game_code
  })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
