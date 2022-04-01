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
    let sessionOptions = {
        name: "sid",
        secret: process.env.SESSION_SECRET,
        proxy: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            secure: false
        },
        resave: false,
        saveUninitialized: false,
        store: new SessionStore({
            db: sequelize
        }),
    };
    if (process.env.NODE_ENV === "production") {
        sessionOptions.proxy = true;
        sessionOptions.cookie.secure = true
    }
    app.use(session(sessionOptions),
    (req, res, next)=>{
        next();
    });
}
module.exports = {sequelize, configureSession};


    