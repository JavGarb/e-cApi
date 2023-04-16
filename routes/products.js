const express = require('express');
const router = express.Router();
const ProductsService = require('../controlers/productsServices');
const products = new ProductsService();


router.get('/', (req, res, next) => {
  try {
    res.status(200).json(products.list());
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) =>{
  const {id}= req.params;
  try {
    res.status(200).json(products.findOne(id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;