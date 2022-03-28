const router = require('express').Router();

const hostRoutes = require('./host-routes');
const gameRoutes = require('./game-routes');
const playerRoutes = require('./player-routes');
const roleRoutes = require('./role-routes');
const kingRoutes = require('./king-routes');

router.use('/hosts', hostRoutes);
router.use('/games', gameRoutes);
router.use('/players', playerRoutes);
router.use('/roles', roleRoutes);
router.use('/kings', kingRoutes);

module.exports = router;