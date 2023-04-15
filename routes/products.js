const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

router.get('/', (req, res, next) => {
  try {
    //creacion de productos fakes
    const products=[];
    for (let index = 0; index < 100; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
      })
    }
    //termina creacion de productos
    res.status(200).json(products)
  } catch (error) {
    next(error);
  }
})

module.exports = router;