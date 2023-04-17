const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate(count) {
    const limit = count || 50;
    for (let index = 0; index <= limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
      });
    }
  }

  list() {
    return this.products;
  }

  create(data) {
    const product = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(product);
    return product;
  }

  find(key, value) {
    const allowedKeys = ['name', 'price', 'category'];
    if (!allowedKeys.includes(key))
      boom.badRequest({
        message: 'valores incorrectos, solo acepta: name, price, category',
      });
    if (key === 'price') value = parseInt(value);
    const product = this.products.filter((e) => e[key] === value);
    if (product) return product;
    else boom.notFound('Producto no encontrado');
  }

  findOne(id) {
    const oneProduct = this.products.filter((e) => e.id === id);
    if (oneProduct.length) return oneProduct;
    else boom.notFound('No existe un producto con ese id');
  }

  update(id, data) {
    const index = this.products.findIndex((e) => e.id == id);
    if (index === -1) boom.notFound('No existe un producto con ese id');
    const oneProduct = this.products[index];
    this.products[index] = { ...oneProduct, ...data };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((e) => e.id == id);
    if (index === -1) boom.notFound('No existe un producto con ese id');
    this.products.splice(index, 1);
    return { deleted: id };
  }
}

module.exports = ProductsService;
