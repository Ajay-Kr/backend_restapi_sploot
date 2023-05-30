const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
require('./helpers/init_mongodb')();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', async(req, res, next) => {
  res.send("Backend REST API");
});

app.use('/api', require('./Routes/Auth.route'));
app.use('/api/users/', require('./Routes/User.route'));
app.use('/api/articles', require('./Routes/Article.route'));

// Error Handlers
app.use(async(req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    statusCode: err.status || 500,
    error:  err.name, 
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}...`);
});