const router = require('express').Router();

const { verifyAccessToken } = require('../helpers/jwt_helper');

const AuthController = require('../Controllers/Auth.controller');
const UserController = require('../Controllers/User.controller');
const ArticleController = require('../Controllers/Article.controller');

// Signup a user
router.post('/signup', AuthController.signup);

// Login the user
router.post('/login', AuthController.login);

// Refresh the access token
router.post('/refresh-token', AuthController.refreshToken);

// Logout user
router.delete('/logout', AuthController.logout);

// Update user profile
router.patch('/users/:userId', verifyAccessToken, UserController.updateUser)

// Create a new article
router.post('/users/:userId/articles', verifyAccessToken, UserController.userNewArticle);

// Get all articles
router.get('/articles', verifyAccessToken, ArticleController.getArticles);



module.exports = router;