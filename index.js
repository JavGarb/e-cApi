//Inicio del servidor
const express = require ('express');
const server = express();
const port = 3000;


server.get('/', (req, res) => {
  res.status(200).send('Server arriba');
});

server.listen(port, ()=>{
  console.log('Server listening in port ' + port);
});
