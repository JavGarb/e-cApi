const joi = require('joi')

const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(50);
const price = joi.number().integer().min(10);
const description = joi.string().alphanum().min(3).max(400);
const category = joi.string().alphanum().min(3).max(40);

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  category: category.required(),
});

const updateProductSchema = joi.object({
  id: id.required(),
  name: name,
  price: price,
  description: description,
  category: category,
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema}