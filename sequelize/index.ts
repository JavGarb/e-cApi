import { Sequelize } from "sequelize";
import { config } from "../config/config";

// Crea cadena de conexión a la base de datos
const USER = encodeURIComponent(config.dbUser!);
const PASSWORD = encodeURIComponent(config.dbPassword!);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Crea la conexión
const sequelize = new Sequelize(URI, { logging: false });

export default sequelize;
