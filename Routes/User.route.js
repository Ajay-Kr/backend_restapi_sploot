const router = require('express').Router();

const { verifyAccessToken } = require('../helpers/jwt_helper');

const UserController = require('../Controllers/User.controller');

// Update user profile
router.patch('/:userId', verifyAccessToken, UserController.updateUser)

// Create a new article
router.post('/:userId/articles', verifyAccessToken, UserController.userNewArticle);


module.exports = router;