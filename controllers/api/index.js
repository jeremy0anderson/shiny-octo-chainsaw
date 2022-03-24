const router = require('express').Router();

const playerRoutes = require('./player-routes');
const hostRoutes = require('./host-routes');
const kingRoutes = require('./king-routes');
const gameRoutes = require('./game-routes');

router.use('/players', playerRoutes);
router.use('/host', hostRoutes);
router.use('/king', kingRoutes);
router.use('/game', gameRoutes);


module.exports = router;