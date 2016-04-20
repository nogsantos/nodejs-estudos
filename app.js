var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var load = require('consign');



var app = express();

// view engine setup
//
/*
 * view engine
 */
swig.setDefaults({cache: false});
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var routes = require('./routes/index');
var users = require('./routes/users');
var chat = require('./routes/chat');
var tasync = require('./routes/async');
var tsync = require('./routes/sync');
var estudos = require('./routes/estudos');

app.use('/', routes);
app.use('/users', users);
app.use('/async', tasync);
app.use('/sync', tsync);
app.use('/estudos', estudos);

app.use('/chat', chat);

/*
 * modulo chat
 */
 var http = require('http').Server(app);
 var io = require('socket.io')(http);
load()
    .include('sockets')
    .into(io);

io.on('connection', function(socket){
  console.log('a user connected');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
