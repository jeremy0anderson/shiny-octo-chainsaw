// require('dotenv').config();
//use express, routes, db config, handlebars
const express = require('express'),
  routes = require('./controllers'),
  app = express(),
  exphbs = require('express-handlebars'),
  session = require('express-session'),
    {sequelize, configureSession} = require('./config/connection'),
  hbs = exphbs.create({}),
  path = require('path');

//configure db session storage
const SequelizeStore = require('express-session-sequelize')(session.Store);

//configure .env and port
const PORT = process.env.PORT || 4005;
// configure handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.set('views', './views');
// app.set('view engine', 'hbs');
// app.engine(
//   'hbs',
//   exphbs.engine({
//     extname: 'hbs',
//     defaultLayout: false,
//   })
// );

// configure session/cookies


// configure static resources (css, images, js)
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
configureSession(app);
//configure req parsing
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// configure routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
