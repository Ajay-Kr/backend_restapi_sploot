const createError = require('http-errors');

const User = require('../Models/User.model');
const Article = require('../Models/Article.model');

module.exports = {
  updateUser: async(req, res, next) => {
    try {
      if(req.payload.aud === req.params.userId) {
        if(req.body.constructor === Object && Object.keys(req.body).length === 0) 
          throw createError.BadRequest('Missing data');
        else {
          const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: req.body
          }, { new: true});

          res.json({
            statusCode: 200,
            data: {
              email: updatedUser.email,
              name: updatedUser.name,
              age: updatedUser.age
            }, 
            message: "User has been updated"
          });
        }
      } else {
        throw createError.Unauthorized();
      }
    } catch (error) {
      next(error);
    }
  }, 

  userNewArticle: async(req, res, next) => {
    try {
      if(req.payload.aud === req.params.userId) {
        if(req.body.constructor === Object && Object.keys(req.body).length === 0) 
          throw createError.BadRequest('Missing data');
        else {
          const user = await User.findById(req.payload.aud);
          const newArticle = new Article({
            userId: user.id, 
            art: req.body.art
          });
          const savedArticle = await newArticle.save();
          
          
          res.json({
            statusCode: 200,
            data: {
              userEmail: user.email,
              article: savedArticle.art,
              time: savedArticle.createdAt
            }, 
            message: "Article created."
          });
        }
      } else {
        throw createError.Unauthorized();
      }
    } catch (error) {
      next(error);
    }
  }
};