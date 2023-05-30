const mongoose = require('mongoose'); 
const User = require('./User.model');

const ArticleSchema = new mongoose.Schema(
  {
    userId: {
      type: String, 
      required: true
    },
    art: {
      type: String, 
      required: true
    }, 
  }, 
  { timestamps: true }
);

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article; 