const router = require('express').Router();
const { Host } = require('../../models');

// GET /api/hosts
router.route('/')
    .get((req, res) => {
        Host.findAll({
          attributes: { exclude: ['password'] }
        })
        .then(dbHostData => res.json(dbHostData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    })
    .post((req, res) => {
      Host.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          })
          .then(dbHostData => res.json(dbHostData))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
    });

// GET /api/hosts/1
router.route('/:id')
    .get((req, res) => {
        Host.findOne({
          attributes: { exclude: ['password'] },
          where: {
            id: req.params.id
          }
        })
          .then(dbHostData => {
            if (!dbHostData) {
              res.status(404).json({ message: 'No host found with this id' });
              return;
            }
            res.json(dbHostData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
    })
    .put((req, res) => {
        // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
        Host.update(req.body, {
          where: {
            id: req.params.id
          }
        })
          .then(dbHostData => {
            if (!dbHostData[0]) {
              res.status(404).json({ message: 'No host found with this id' });
              return;
            }
            res.json(dbHostData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
    })
    .delete((req, res) => {
        Host.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(dbHostData => {
            if (!dbHostData) {
              res.status(404).json({ message: 'No host found with this id' });
              return;
            }
            res.json(dbHostData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
    });

module.exports = router;