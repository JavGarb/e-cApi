const { Sequelize } = require('sequelize');
const userModel = require('../db/models/userModel');

const { config } = require('../config/config');
//crea cadena de conexion a db
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//crea la conexion
const sequelize = new Sequelize(URI, {logging: false});
userModel(sequelize);

module.exports = sequelize;