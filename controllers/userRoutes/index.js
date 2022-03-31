const router = require('express').Router();
const {configureSession, sequelize} = require('../../config/connection');
const dashboardRoute = require('./dashboard');
const authRoute = require('./auth');
const gameRoute = require('./game');
const homeRoute = require('./home');
const lobbyRoute = require('./lobby');

configureSession(router);

router.use('/dashboard', dashboardRoute);
router.use('/game', gameRoute);
router.use('/', authRoute);
router.use('/home', homeRoute);
router.use('/lobby', lobbyRoute);

module.exports = router;