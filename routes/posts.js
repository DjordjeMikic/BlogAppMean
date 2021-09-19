let router = require('express').Router();
let {
  getPosts,
  getPost,
  findByCategory,
  findByAuthor
} = require('../controllers/posts');

router.get('/', getPosts);
router.get('/post/:title', getPost);
router.get('/category/:category', findByCategory);
router.get('/author/:author', findByAuthor);

module.exports = router;
