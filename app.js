var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var usersRouter = require('./routes/users');
var usersApi =  require('./api/users');

var app = express();
global.config = require('./config');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port',global.config.server.port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: global.config.session.secret,
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/api',usersApi);

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

var db = require('./db.js');

var server = require('http').Server(app);

var io = require('socket.io')(server);

server.listen(app.get('port'), function() {
	console.log('port ' + app.get('port'));
});

io.on('connection', function(socket) {

	console.log('Un cliente se ha conectado');
	

});




module.exports = app;
