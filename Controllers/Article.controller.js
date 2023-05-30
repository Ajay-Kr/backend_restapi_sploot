const Article = require('../Models/Article.model');

module.exports = {
  getArticles: async(req, res, next) => {
    try {
      const articles = await Article.find().select(['-_id','userId', 'art']);

      res.json({
        statusCode: 200,
        data: {
          articles
        }, 
        message: "All articles"
      });
    } catch (error) {
      next(error);
    }
  }
};