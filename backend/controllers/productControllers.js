const { HttpError, ctrlWrapper } = require('../helpers');

const Product = require('../models');

const addProduct = ctrlWrapper(async (req, res) => {
  const { title, price } = req.body;

  const isProductExists = await Product.findOne({ title });

  if (isProductExists) {
    throw HttpError(409, `Product "${title}" already exist`);
  }

  const result = await Product.create({ ...req.body });
  res.status(201).json(result);
});

module.exports = addProduct;
