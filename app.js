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
var bodyParser = require('body-parser');
var infoRouter  = require('./routes/info');
var loginRouter  = require('./routes/login');

var validateRouter  = require('./routes/validate');
var post1Router  = require('./routes/post1');

var post2Router  = require('./routes/post2');

var post3Router  = require('./routes/post3');

var post4Router  = require('./routes/post4');

var form1Router  = require('./routes/form1');
var form2Router  = require('./routes/form2');

var home1Router  = require('./routes/home1');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/login',loginRouter);

app.get('/form1',form1Router);

app.get('/home1',home1Router);
app.post('/form2',form2Router);
app.post('/info',infoRouter)

app.post('/validate',validateRouter)
app.post('/post1',post1Router)

app.post('/post2',post2Router)
app.post('/post3',post3Router)
app.post('/post4',post4Router)
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
