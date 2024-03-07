const { HttpError, ctrlWrapper } = require('../helpers');

const Farm = require('../models');

const addFarm = ctrlWrapper(async (req, res) => {
  const { title, price } = req.body;

  const isProductExists = await Farm.findOne({ title });

  if (isProductExists) {
    throw HttpError(409, `Product "${title}" already exist`);
  }

  const result = await Farm.create({ ...req.body });
  res.status(201).json(result);
});

module.exports = addFarm;
