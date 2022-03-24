const express = require('express');
const router = require('express').Router();
const app = express();
const apiRoutes = require('./controllers/api');
const htmlRoutes = require('./controllers/htmlRoutes')

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);