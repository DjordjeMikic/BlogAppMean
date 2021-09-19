let Posts = require('../models/posts');

const getPosts = async (req, res) => {
  try {
    let result = await Posts.findAll({
      where: { public: 'public' }
    });
    res.status(200).json(result);
  } catch(e) {
    res.status(400).json(e);
  }
}

const getPost = async (req, res) => {
  try {
    let result = await Posts.findOne({
      where: { title: req.params.title, public: 'public' }
    });
    res.status(200).json(result);
  } catch(e) {
    res.status(400).json(e);
  }
}

const findByCategory = async (req, res) => {
  try {
    let result = await Posts.findAll({ where:
      { category: req.params.category }
    });
    res.status(200).json(result);
  } catch(e) {
    res.status(400).json(e);
  }
}

const findByAuthor = async (req, res) => {
  try {
    let result = await Posts.findAll({
      where: { author_id: req.params.author }
    });
    res.status(200).json(result);
  } catch(e) {
    res.status(400).json(e);
  }
}

module.exports = {
  getPosts,
  getPost,
  findByCategory,
  findByAuthor
}
