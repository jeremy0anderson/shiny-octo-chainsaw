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

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// configure routes
app.use(routes);
//configure socket.io
const {Server} = require('socket.io')
const httpApp = require('http').createServer(app);
const io = new Server(httpApp, {
  transports: ['websocket']
})

sequelize.sync({ force: false }).then(() => {
  httpApp.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
io.of('/game').on('connection', (socket)=>{

})
app.set("socketIO", io);
// app.set('playerSocket', ioPlayer);