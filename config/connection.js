require('dotenv').config();
const {Sequelize} = require('sequelize');
let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
    {
        host: "localhost",
        port: 3306,
        dialect: 'mysql'
    })
module.exports = sequelize;

    