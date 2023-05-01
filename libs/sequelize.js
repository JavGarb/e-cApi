const { Sequelize } = require('sequelize');
const pg = require('pg');

const { config } = require('../config/config');
//crea cadena de conexion a db
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//crea la conexion
const sequelize = new Sequelize(URI, {
  logging: false,
  native: false,
  dialect: 'postgres',
  dialectModule: pg,
});
//envio un objeto redefiniendo la conecion como conn
module.exports = {conn:sequelize};