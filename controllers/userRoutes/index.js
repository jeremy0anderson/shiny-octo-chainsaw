const router = require('express').Router();

const dashboardRoute = require('./dashboard');
const authRoute = require('./auth');
const hostRoute = require('./game');

router.use('/dashboard', dashboardRoute);
router.use('/game', hostRoute);
router.use('/', authRoute);
module.exports = router;