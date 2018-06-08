const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const apiRouter = require('./routes/api');
const app = express();
const port = normalizePort(process.env.PORT || '3000');
const debug = require('debug')('June-Speedrun-FCC-new:server');
const http = require('http');

app.set('port', port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/June-Speedrun-FCC-new')));
app.use('/', express.static(path.join(__dirname, 'dist/June-Speedrun-FCC-new')));
app.use('/api', apiRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err.status);
});

const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


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

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port))  return val;
  if (port >= 0) return port;
  return false;
}