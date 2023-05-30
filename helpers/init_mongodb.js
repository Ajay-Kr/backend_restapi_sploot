const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGODB_URI_LOCAL, {
    dbName: process.env.DB_NAME 
  });
  
  mongoose.connection.on('connected', () => {
    console.log('💾 Mongoose connected to db...');
  });

  mongoose.connection.on('error', (err) => {
    console.log(err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log("Mongoose connection is disconnected.");
  });

  process.on('SIGINT', async () => {
    await mongoose.connection.close()
      .then(() => process.exit(0));
  });
}