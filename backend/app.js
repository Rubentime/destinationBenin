const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const trucRouter = require('./routes/truc');
const authRouter = require('./routes/auth');
const touristRouter = require('./routes/touristes');
const guidesRouter = require('./routes/guides_touristiques');
const partenairesRouter = require('./routes/partenaires');
const adminRouter = require('./routes/admin');
const reservationRouter = require('./routes/reservation');
const restaurantsRouter = require('./routes/restaurants');
const hebergementRouter = require('./routes/hebergement');
const chambreRouter = require('./routes/chambre');
const expressionRouter = require('./routes/expression');
const transactionRouter = require('./routes/transaction');
const cuisineRouter = require('./routes/cuisine');
const evenementRouter = require('./routes/evenement');
const destinationRouter = require('./routes/destination');
const transportRouter = require('./routes/transport');
const presidentRouter = require('./routes/president');
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

mongoose.connect(`mongodb://${process.env.Database_url}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/truc', trucRouter);
app.use('/api/auth', authRouter);
app.use('/api/touristes', touristRouter);
app.use('/api/guides', guidesRouter);
app.use('/api/partenaire', partenairesRouter);
app.use('/api/admin', adminRouter);
app.use('/api/reservation', reservationRouter);
app.use('/api/restaurants', restaurantsRouter);
app.use('/api/hebergement', hebergementRouter);
app.use('/api/chambre', chambreRouter);
app.use('/api/expression', expressionRouter);
app.use('/api/transaction', transactionRouter);
app.use('/api/cuisine', cuisineRouter);
app.use('/api/evenement', evenementRouter);
app.use('/api/destination', destinationRouter);
app.use('/api/transport', transportRouter);
app.use('/api/president', presidentRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
