const express = require('express');
const router = require('express').Router();
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

app.use('/api', apiRoutes);