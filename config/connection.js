const {Sequelize} = require('sequelize');
const session = require('express-session');
const SessionStore = require('express-session-sequelize')(session.Store);
require('dotenv').config();

let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
    {
        host: "localhost",
        port: 3306,
        dialect: 'mysql',
        logging: false
    })

const configureSession=(app)=>{
    return app.use(session({
        name: "sid",
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
        resave: false,
        saveUninitialized: false,
        store: new SessionStore({
            db: sequelize
        }),
    }), (req, res, next)=>{
        console.log(req.session.user);
        console.log('using session');
        next();
    });
}
module.exports = {sequelize, configureSession};


    