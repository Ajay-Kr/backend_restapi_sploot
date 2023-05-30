const router = require('express').Router();

const { verifyAccessToken } = require('../helpers/jwt_helper');

const ArticleController = require('../Controllers/Article.controller');

// Get all articles
router.get('/', verifyAccessToken, ArticleController.getArticles);


module.exports = router;