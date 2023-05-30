const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
require('./helpers/init_mongodb')();

const AllRoute = require('./Routes/all.route');

const { verifyAccessToken } = require('./helpers/jwt_helper');

const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.get('/', verifyAccessToken, async(req, res, next) => {
  console.log(req.payload);
  res.send("Hello from exress...");
});

app.use('/api', AllRoute);

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