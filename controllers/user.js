const User = require('../models/user');
const Posts = require('../models/posts');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkRegister = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [
        { email: req.body.email },
        { username: req.body.username }
      ]
    }
  });

  if(!user) {
    next();
  } else {
    res.status(400).json('User has been already registered');
  }
}

const registerUser = async (req, res) => {
  try {
    const { name, lname, username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const result = await User.create({
      name,
      lname,
      username,
      email,
      password: hash
    });

    res.status(200).json('Registered successfully please login');
  } catch(e) {
    res.status(400).json(e);
  }
}

const getUsers = async (req, res) => {
  const result = await User.findAll();
  res.status(200).json(result);
}

const login = async (req, res) => {
  const result = await User.findOne({ where: { username: req.body.username } });

  if(!result) {
    res.status(400).json('User is not registered');
    return;
  }

  const isMatch = await bcrypt.compare(req.body.password, result.password);

  if(!isMatch) {
    res.status(400).json('Wrong credentials');
    return;
  }
  const { password, ...rest } = result.dataValues;

  const token = jwt.sign({ ...rest }, process.env.TOKEN_AUTH, {
    expiresIn: '1d'
  });

  res.status(200).json(token);
}

const getMyPosts = async (req, res) => {
  const result = await Posts.findAll({
    where: { author_id: req.params.id }
  });

  res.status(200).json(result);
}

const addPost = async (req, res) => {
  try {
    const { id, title, content } = req.body;

    const result = await Posts.create({
      title,
      content,
      author_id: id
    });

    res.status(200).json('Post succesfully added');
  } catch(e) {
    res.status(400).json(e);
  }

}

const updatePost = async (req, res) => {
  try {
    const post = await Posts.findOne({
      where: { title: req.params.title }
    });

    post.content = req.body.content;

    await post.save();

    res.status(200).json('Post content has been changed');
  } catch(e) {
    res.status(400).json(e);
  }
}

const removePost = async (req, res) => {
  try {
    const post = await Posts.findOne({
      where: { title: req.params.title }
    });

    if(post) {

      await post.destroy();

      res.status(200).json('Post deleted');

    }
  } catch(e) {
    res.status(400).json(e);
  }
}

const getCertainPost = async (req, res) => {
  try {
    const post = await Posts.findOne({
      where: { title: req.params.title }
    });

    res.status(200).json(post);
  } catch(e) {
    res.status(400).json(e);
  }
}

const getPostById = async (req, res) => {
  try {
    const post = await Posts.findByPk(parseInt(req.params.id));
    res.status(200).json(post);
  } catch(e) {
    res.status(400).json(e);
  }
}

module.exports = {
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
}
