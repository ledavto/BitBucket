const express = require('express');
const { addProduct } = require('../controllers');

const productRouter = express.Router();

productRouter.post('/', addProduct);
// .get('/:id', getProductById);

module.exports = productRouter;
