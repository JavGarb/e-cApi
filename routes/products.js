const express = require('express');
const router = express.Router();
const ProductsService = require('../controlers/productsServices');
const products = new ProductsService();
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} = require('./../schemas/prductSchema');

router.get('/', (req, res, next) => {
  const { name, category, price } = req.query;
  try {
    if (name) res.status(200).json(products.find('name', name));
    else if (category)
      res.status(200).json(products.find('category', category));
    else if (price) res.status(200).json(products.find('price', price));
    else res.status(200).json(products.list());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  const { id } = req.params;
  try {
    res.status(200).json(products.findOne(id));
  } catch (error) {
    next(error);
  }
});

router.post('/create',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
  const data = req.body;
  try {
    res.status(200).json(products.create(data));
  } catch (error) {
    next(error);
  }
});

router.patch('/update/:id',
  validatorHandler(updateProductSchema, 'params'),
  async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    res.status(200).json(products.update(id, data));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
