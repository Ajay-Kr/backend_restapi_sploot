const mongoose = require('mongoose'); 

const ArticleSchema = new mongoose.Schema(
  {
    userId: {
      type: String, 
      require: true
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