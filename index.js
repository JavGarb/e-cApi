//Inicio del servidor
const express = require ('express');
const routerApi = require('./routes');
const server = express();
const port = 3000;
const { errorHandler, errorLogs } = require('./middlewares/error.handlers');

//ruta principal
server.get('/', (req, res) => {
  res.status(200).send('Server arriba');
});

//routing
routerApi(server);

//middlewares para manejo de errores
server.use(errorLogs);
server.use(errorHandler);

server.listen(port, ()=>{
  console.log('Server listening in port ' + port);
});

