const boom = require('@hapi/boom');
//Hace la validacion de datos usando los schemas que cree en la carpeta schemas.
/*retorna una funcion y si hay error en la validacion lo gestiona el
middleware de error.*/

function  validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const {error} = schema.validate(data);
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
};

module.exports = validatorHandler;