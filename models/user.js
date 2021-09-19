const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../utils/connectToDb');

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
