const express = require('express');
const parentRouter = require('./parent/parent.router');

const api = express.Router();

api.use('/transactions', parentRouter);

module.exports = api;