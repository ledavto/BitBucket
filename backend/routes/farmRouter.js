const express = require('express');
const { addFarm } = require('../controllers');

const farmRouter = express.Router();

farmRouter.post('/', addFarm);
// .get('/:id', getFarmById);

module.exports = farmRouter;
