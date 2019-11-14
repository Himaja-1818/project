var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addRouter   = require('./routes/add');
var subRouter   = require('./routes/sub');
var mulRouter   = require('./routes/mul');
var sqrRouter   = require('./routes/sqr');
var homeRouter  = require('./routes/home');
var cityRouter  = require('./routes/city');

var countryRouter  = require('./routes/country');
var nameRouter  = require('./routes/name');
var townRouter  = require('./routes/town');
var courseRouter  = require('./routes/course');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/add',addRouter);
app.get('/sub',subRouter);
app.get('/mul',mulRouter);
app.get('/sqr',sqrRouter);
app.get('/home',homeRouter);

app.get('/city/:cityname',cityRouter);

app.get('/country/:countryname',countryRouter);
app.get('/name/:name1',nameRouter);
app.get('/town/:townname',townRouter);
app.get('/course/:coursename',courseRouter);


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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
