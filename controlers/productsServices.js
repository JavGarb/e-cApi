const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  };

  generate(count){
    const limit = count || 50
    for (let index = 0; index <= limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
      })
    }
  };

  list(){
    return this.products;
  }

  create(){

  };

  find(key, value){
    const allowedKeys = ['name', 'price', 'category'];
    if(!allowedKeys.includes(key))return 'Key solo acepta uno de los siguientes valores: name, price, category';
    const product= this.products.filter(e => e[key] === value);
    if(product.length) return product;
    return 'No se encontro el producto'
  };

  findOne(id){
    const oneProduct = this.products.filter(e => e.id === id);
    if(oneProduct.length) return oneProduct;
    return "Producto no encontrado";
  };

  update(){

  };

  delete(){

  };

}

module.exports = ProductsService;