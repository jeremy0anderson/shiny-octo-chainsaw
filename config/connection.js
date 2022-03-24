const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306
});
// sequelize.authenticate().then((err, res)=>{
//   if (err) throw err;
//   console.log(res);
// })
module.exports = sequelize;