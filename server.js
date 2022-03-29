// require('dotenv').config();
//use express, routes, db config, handlebars
const express = require('express'),
  routes = require('./controllers'),
  app = express(),
  exphbs = require('express-handlebars'),
  session = require('express-session'),
  sequelize = require('./config/connection');

//configure db session storage
const SequelizeStore = require('express-session-sequelize')(session.Store);

//configure .env and port
const PORT = process.env.PORT || 4005;
// configure handlebars
app.set('views', './views');
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs.engine({
    extname: 'hbs',
    defaultLayout: false,
  })
);

// configure session/cookies
const sess = {
  // name: "connect.sid",
  // secret: process.env.SESSION_SECRET,
  secret: 'Super secret stuff',
  // path: "/",
  cookie: {
    //set to 5 minutes for testing
    maxAge: 1000 * 60 * 5,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//configure req parsing
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// configure static resources (css, images, js)
app.use(express.static('public'));

// configure routes
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
