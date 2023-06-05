
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./database/models")

// requerir session
const session = require("express-session");


var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var usersRouter = require('./routes/users');

var app = express();
// Implementar Session

app.use(session({ secret: "PokeHub", resave: false, saveUninitialized: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// SI CCOOKIE EXITE O NO

app.use(function (req, res, next) {
  if (req.cookies.idUsuario != undefined && req.session.user == undefined) {
    let idUsuarioEnCookie = req.cookies.idUsuario;
    db.Usuarios.findByPk(idUsuarioEnCookie)
      .then(function (user) {
        req.session.user = user.dataValues;
        res.locals.user = user.dataValues;
        return next();
      }).catch(function (error) {
        console.log(error);
      });
  }
  else {
    return next();
  }
});



// USE SESSION

app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
    return next()
  }
  return next();
});

app.use('/', indexRouter);
app.use('/product', productRouter)
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
