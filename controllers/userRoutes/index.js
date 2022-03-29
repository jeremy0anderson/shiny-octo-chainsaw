const router = require('express').Router();

const dashboardRoute = require('./dashboard');
const authRoute = require('./auth');
const hostRoute = require('./game');
const homeRoute = require('./home');

router.use('/dashboard', dashboardRoute);
router.use('/game', hostRoute);
router.use('/', authRoute);
router.use('/home', homeRoute);

module.exports = router;