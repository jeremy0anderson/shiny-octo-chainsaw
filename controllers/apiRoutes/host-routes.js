const router = require('express').Router();
const { Host } = require('../../models');

// GET /api/hosts
router.get('/', (req, res) => {
  // Access our Host model and run .findAll() method)
  Host.findAll({
    attributes: { exclude: ['password'] },
  })
      .then((dbHostData) => res.json(dbHostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET /api/hosts/1
router.get('/:id', (req, res) => {
  Host.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    },
  })
      .then((dbHostData) => {
        if (!dbHostData) {
          res.status(404).json({ message: 'No host found with this id' });
          return;
        }
        res.json(dbHostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})
    .put('/:id', (req, res) => {
      // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
      Host.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id,
        },
      })
          .then((dbHostData) => {
            if (!dbHostData[0]) {
              res.status(404).json({ message: 'No host found with this id' });
              return;
            }
            res.json(dbHostData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    })

    // DELETE /api/hosts/1
    .delete('/:id', (req, res) => {
      Host.destroy({
        where: {
          id: req.params.id,
        },
      })
          .then((dbHostData) => {
            if (!dbHostData) {
              res.status(404).json({ message: 'No host found with this id' });
              return;
            }
            res.json(dbHostData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    });
module.exports = router;