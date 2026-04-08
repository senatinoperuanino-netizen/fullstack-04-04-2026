//Conexión a base de datos
//importamos sequelize
require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME || 'taskmanager';
const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || 'localhost';

//Crear conexion a mysql
const sequelize = new Sequelize(dbName, dbUser, dbPass,
    {
        host: dbHost,
        dialect: 'mysql'
    });
//probar conexion
sequelize.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch(err => console.error('Fallo la conexion', err));

module.exports = sequelize;