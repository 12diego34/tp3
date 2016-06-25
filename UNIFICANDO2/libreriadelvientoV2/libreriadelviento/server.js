#!/usr/bin/env node
var app = require('./app');
var debug = require('debug')('libreriadelviento:server');
var http = require('http');

// Inicialización
var express  = require('express');
var app      = express();           // Utilizamos express
var mongoose = require('mongoose');         // mongoose para mongodb
var port = normalizePort(process.env.PORT || '8080');

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var books = require('./routes/books');


// Configuracion
//mongoose.connect('mongodb://localhost:27017/MeanExample');  // Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"
logger = require('morgan');
app.use(logger('dev'));
mongoose.connect('mongodb://localhost:27017/libros');   // Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"

//app.configure(function() {
app.use(express.static(__dirname + '/public'));    
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//app.use(express.logger('dev'));       // activamos el log en modo 'dev'
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//});

// Cargamos los endpoints
//require('./app/routes.js')(app);
require('./routes/routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("Libreria del viento " + port);
/**
 * Module dependencies.
 */


/**
 * Get port from environment and store in Express.
 */


//app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

//server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */



function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
