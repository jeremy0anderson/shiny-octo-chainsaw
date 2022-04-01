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
// app.use(express.static('public'));
// configureSession(app);
//configure req parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// configure routes
app.use(routes);
//configure socket.io
const {Server} = require('socket.io')
const httpApp = require('http').createServer(app);
const io = new Server(httpApp, {
  transports: ['websocket', 'polling'],
  serveClient: true,
  allowUpgrades: true
})

sequelize.sync({ force: false }).then(() => {
  httpApp.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
app.set("socketIO", io);
// app.set('playerSocket', ioPlayer);
io.on('connection', (socket)=> {
});