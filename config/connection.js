const {Sequelize} = require('sequelize');
const session = require('express-session');
const SessionStore = require('express-session-sequelize')(session.Store);
require('dotenv').config();

let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: 'mysql',
        logging: false
    })
const sStore = new SessionStore({
    db: sequelize
})
// session options
let sessionOptions = {
    //name of the cookie
    name: "sid",
    // secret used to sign cookie
    secret: process.env.SESSION_SECRET,
    // false, but set to true in configureSession function depending on whether the environment is set to production or not
    proxy: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        // false, but set to true in configureSession function depending on whether the environment is set to production or not
        secure: false
    },
    resave: false,
    saveUninitialized: false,
    //store session information in mysql database
    store: new SessionStore({
        db: sequelize
    }),
};

//function that configures session for app or router -- depends on where it's placed and how routes are set up.
// since this app's routes are configured outside the main server.js/app.js file, we need it where the routes are set up at "__project root/controllers/userRoutes and /apiRoutes"
const configureSession=(app)=> {
    sessionOptions = {
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
        (req, res, next) => {
            next();
        });
}
module.exports = {sequelize, configureSession, session, sStore, SessionStore, sessionOptions};


    