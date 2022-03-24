const router = require('express').Router();
const { Host } = require('../../models');
const bcrypt = require('bcrypt');

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
    });
    router.post('/signup',async(req, res) => {
          const salt = await bcrypt.genSalt(10);
          let hashedPw = await bcrypt.hash(req.body.password, salt);
          const user = Host.findOne({
                where: {
                      username: req.body.username
                }
          }).then(hostData => {
                if (!hostData) {
                      Host.create({
                                username: req.body.username, email: req.body.email, password: hashedPw
                          })
                          .then(dbHostData => res.json(dbHostData))
                          .catch(err => {
                                console.log(err);
                                res.status(500).json(err);
                          });
                } else {
                      res.status(401).json({error: "User Already Exists"});
                }
          });
    });
    router.post('/login',async (req, res)=>{
          const user = await Host.findOne({
                where: {
                      username: req.body.username
                }
          });
                if (user) {
                      const validPass = await bcrypt.compare(req.body.password, user.toJSON().password);
                      if (validPass) {
                            res.status(200).json({message: "Valid Password"})
                      } else {
                            res.status(400).json({error: "invalid password"})
                      }
                } else {
                      res.status(401).json({error: "User does not exist"});
                }
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