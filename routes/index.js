const userRouter = require('./user');
const productsRouter = require('./products');

function routerApi(server) {
  server.use('/user', userRouter);
  server.use('/products', productsRouter);
}

module.exports = routerApi;
