const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');

var app = express();

// log HTTP requests
// log the requests with statusCode < 400 to the stdout
app.use(morgan('dev', {
  stream: process.stderr,
  skip: (req, res) => {
      return res.statusCode < 400
  }
}));

// requests with statusCode >= 400 to the stderr
app.use(morgan('dev', {
  stream: process.stdout,
  skip: (req, res) => {
      return res.statusCode >= 400
  }
}));

// enhance your app security with Helmet
app.use(helmet())

// enable all CORS requests
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// API calls
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) { 
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
