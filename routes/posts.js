const router = require('express').Router();
const {
  getPosts,
  getPost,
  findByCategory,
  findByAuthor
} = require('../controllers/posts');

// @dest /api/posts

router.get('/', getPosts);

router.get('/post/:title', getPost);

router.get('/category/:category', findByCategory);

router.get('/author/:author', findByAuthor);

module.exports = router;
