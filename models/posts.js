const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../utils/connectToDb');

class Posts extends Model { }

Posts.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  public: {
    type: DataTypes.ENUM('private', 'public'),
    defaultValue: 'public',
    allowNull: false
  },
  category: {
    type: DataTypes.ENUM('uncategorized', 'traveling', 'tech'),
    defaultValue: 'uncategorized'
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  sequelize,
  modelName: 'Posts',
  timestamps: false
});

module.exports = Posts;
