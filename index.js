//Inicio del servidor
const express = require ('express');
const routerApi = require('./routes');
const server = express();
const port = 3000;
const { errorHandler, errorLogs, boomErrorHandler } = require('./middlewares/error.handlers');

//ruta principal
server.get('/', (req, res) => {
  res.status(200).send('Server arriba');
});

//routing
routerApi(server);

//recibir formato json
server.use(express.json());

//middlewares para manejo de errores
server.use(errorLogs);
server.use(boomErrorHandler);
server.use(errorHandler);

server.listen(port, ()=>{
  console.log('Server listening in port ' + port);
});

