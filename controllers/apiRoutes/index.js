const router = require('express').Router();
const express = require("express");
const {configureSession} = require("../../config/connection");


const hostRoutes = require('./host-routes');
const gameRoutes = require('./game-routes');
const playerRoutes = require('./player-routes');
const roleRoutes = require('./role-routes');
const roomRoutes = require('./room-routes');

//configure router to use session (to access information for a signed-in user).
configureSession(router);

router.use('/hosts', hostRoutes);
router.use('/games', gameRoutes);
router.use('/players', playerRoutes);
router.use('/roles', roleRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;