const router = require('express').Router();
const { Player, Game, Role } = require('../../models');

// GET /api/players
router.get('/', (req, res) => {
  Player.findAll()
  .then(dbPlayerData => res.json(dbPlayerData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/players/1
router.get('/:id', (req, res) => {
  Player.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbPlayerData => {
      if (!dbPlayerData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/players
router.post('/', (req, res) => {
  Player.create({
    username: req.body.name,
    game_code: req.body.game_code
  })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/players/1
router.put('/:id', (req, res) => {
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Player.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPlayerData => {
      if (!dbPlayerData[0]) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/players/1
router.delete('/:id', (req, res) => {
  Player.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPlayerData => {
      if (!dbPlayerData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;