const Joi = require('joi');

const authSignupSchema = Joi.object({
  email: Joi.string().email().lowercase().required(), 
  password: Joi.string().min(3).required(),
  re_password: Joi.ref('password')
}).with('password', 're_password');

const authLoginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(), 
  password: Joi.string().min(3).required()
});

module.exports = {
  authSignupSchema, 
  authLoginSchema
};
