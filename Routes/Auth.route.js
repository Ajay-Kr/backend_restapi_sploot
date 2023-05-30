const router = require('express').Router();

const AuthController = require('../Controllers/Auth.controller');

// Signup a user
router.post('/signup', AuthController.signup);

// Login the user
router.post('/login', AuthController.login);


module.exports = router;