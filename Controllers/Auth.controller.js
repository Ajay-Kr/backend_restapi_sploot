const createError = require('http-errors');

const { authSignupSchema, authLoginSchema } = require('../helpers/validation_schema');
const { signAccessToken } = require('../helpers/jwt_helper');

const User = require('../Models/User.model');

module.exports = {
  signup: async(req, res, next) => {
    try {
      const result = await authSignupSchema.validateAsync(req.body);

      const doesExist = await User.findOne({email: result.email});
      if(doesExist) 
        throw createError.Conflict(`${result.email} has already been registered`);

      const user = new User(result); 
      const savedUser = await user.save();

      const accessToken = await signAccessToken(user.id);

      res.json({
        statusCode: 200,
        data: {
          accessToken
        }, 
        message: "User registered successfully"
      });
    } catch (error) {
      if(error.isJoi === true) error.status = 422;
      next(error);
    }
  }, 

  login: async(req, res, next) => {
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
          accessToken, 
          email: user.email, 
          username: user.name, 
          age: user.age
        }, 
        message: "User loged in successfully"
      });
    } catch (error) {
      if(error.isJoi === true) return next(createError.BadRequest("Invalid Username/Password"));
      next(error);
    }
  }
};