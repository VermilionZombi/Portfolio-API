require('dotenv').config();
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

// Database Setup
const connection_string = config.database.buildConnectionString();
mongoose.connect(connection_string)
  .then(() => {
  console.log('Database connection successful.');
  })
  .catch((error) => {
    console.log('An error occured connecting to the Database');
  })

// Router Middleware
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let profilesRouter = require('./routes/profiles');
let projectsRouter = require('./routes/projects');
let knowledgeRouter = require('./routes/knowledge');
let experienceRouter = require('./routes/experience');
let referenceRouter = require('./routes/reference');
let skillsRouter = require('./routes/skills');

// ?
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Make sure your objects are being routed below.
app.use('/', indexRouter);
app.use('/profiles', profilesRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/knowledge', knowledgeRouter);
app.use('/experience', experienceRouter);
app.use('/reference', referenceRouter);
app.use('/skills', skillsRouter);


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
// Nice
module.exports = app;