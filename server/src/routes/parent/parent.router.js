const express = require('express');

const { httpGetAllParentTransactions } = require('./parent.controller');

const parentRouter = express.Router();

parentRouter.get('/', httpGetAllParentTransactions);

module.exports = parentRouter;