const router = require('express').Router();
const {configureSession, configureGame} = require('../../config/connection');
const dashboardRoute = require('./dashboard');
const authRoute = require('./auth');
const gameRoute = require('./game');
const homeRoute = require('./home');
const lobbyRoute = require('./lobby');

//configure router to use session (to access information for a signed-in user).
configureSession(router);

// configureGame(router, lobbyRoute);
router.use('/dashboard', dashboardRoute);
router.use('/game', gameRoute);
router.use('/', authRoute);
router.use('/', homeRoute);
router.use('/lobby', lobbyRoute);

module.exports = router;