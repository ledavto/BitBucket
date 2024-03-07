const { Schema, model } = require('mongoose');
const Joi = require('joi');

const productSchema = new Schema(
  {
    titleProd: {
      type: String,
      required: [true, 'Set title for product'],
    },
    price: {
      type: String,
      required: [true, 'Set surname for user'],
    },

    ownerFarm: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
productSchema.post('save', (error, data, next) => {
  error.status = 400;
  next();
});

const addSchema = Joi.object({
  titleProd: Joi.string().required(),
  price: Joi.string().required(),
});

const schema = { addSchema };
const Product = model('products', productSchema);

module.exports = Product;

//module.exports = model("user", userSchema);
