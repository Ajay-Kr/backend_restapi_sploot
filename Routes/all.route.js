const router = require('express').Router();
const createError = require('http-errors');

const { authSignupSchema, authLoginSchema } = require('../helpers/validation_schema');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwt_helper');
const User = require('../Models/User.model');
const Article = require('../Models/Article.model');

// Signup a user
router.post('/signup', async(req, res, next) => {
  try {
    const result = await authSignupSchema.validateAsync(req.body);

    const doesExist = await User.findOne({email: result.email});
    if(doesExist) 
      throw createError.Conflict(`${result.email} is already been registered`);

    const user = new User(result); 
    const savedUser = await user.save();

    const accessToken = await signAccessToken(savedUser.id);

    res.json({
      statusCode: 200,
      data: {
        accessToken
      }, 
      message: "User registered"
    });
  } catch (error) {
    if(error.isJoi === true) error.status = 422;
    next(error);
  }
});

// Login the user
router.post('/login', async(req, res, next) => {
  try {
    const result = await authLoginSchema.validateAsync(req.body);
    
    const user = await User.findOne({email: result.email});
    if(!user) 
      throw createError.NotFound("User not registered");

    const isMatch = await user.isValidPassword(result.password);
    if(!isMatch) 
      throw createError.Unauthorized('Username/password not valid');

    const accessToken = await signAccessToken(user.id);

    res.json({
      statusCode: 200,
      data: {
        accessToken
      }, 
      message: "User loged in"
    });
  } catch (error) {
    if(error.isJoi === true) return next(createError.BadRequest("Invalid Username/Password"));
    next(error);
  }
});

// Refresh the access token
router.post('/refresh-token', async(req, res, next) => {
  res.send('refresh-token route');
});

// Logout user
router.delete('/logout', async(req, res, next) => {
  res.send('logout route');
});

// Update user profile
router.patch('/users/:userId', verifyAccessToken, async(req, res, next) => {
  try {
    if(req.payload.aud === req.params.userId) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0) 
        throw createError.UnprocessableEntity('Missing data');
      else {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
          $set: req.body
        });

        res.json({
          statusCode: 200,
          data: {
            updatedUser,
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
})

// Create a new article
router.post('/users/:userId/articles', verifyAccessToken, async(req, res, next) => {
  try {
    if(req.payload.aud === req.params.userId) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0) 
        throw createError.UnprocessableEntity('Missing data');
      else {
        const newArticle = new Article({
          userId: req.payload.aud, 
          art: req.body.art
        });
        const savedArticle = await newArticle.save();
        
        res.json({
          statusCode: 200,
          data: {
            savedArticle,
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
});

// Get all articles
router.get('/articles', verifyAccessToken, async(req, res, next) => {
  try {
    const articles = await Article.find();

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
});



module.exports = router;