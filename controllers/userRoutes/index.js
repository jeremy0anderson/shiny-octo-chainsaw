const router = require('express').Router();
const {configureSession, sequelize} = require('../../config/connection');
const dashboardRoute = require('./dashboard');
const authRoute = require('./auth');
const hostRoute = require('./game');
const homeRoute = require('./home');
const waitRoute = require('./host-wait-pg');
const endRoute = require('./end')

configureSession(router);

router.use('/dashboard', dashboardRoute);
router.use('/game', hostRoute);
router.use('/', authRoute);
router.use('/home', homeRoute);
router.use('/waiting', waitRoute);
router.use('/end', endRoute)

module.exports = router;