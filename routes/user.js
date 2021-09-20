const router = require('express').Router();
const {
  checkRegister,
  registerUser,
  getUsers,
  login,
  getMyPosts,
  addPost,
  updatePost,
  removePost,
  getCertainPost,
  getPostById
} = require('../controllers/user');
const verifyUser = require('../middleware/verifyUser');

// @dest /api/user

router.get('/', verifyUser, getUsers);

router.post('/register', checkRegister, registerUser);

router.post('/login', login);

router.get('/author/:id', verifyUser, getMyPosts);

router.post('/add', verifyUser, addPost);

router.delete('/rm/:title', verifyUser, removePost);

router.put('/change/:title', verifyUser, updatePost);

router.get('/post/:title', verifyUser, getCertainPost);

router.get('/id/:id', verifyUser, getPostById);

module.exports = router;
