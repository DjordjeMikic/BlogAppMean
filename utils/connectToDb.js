const { Sequelize } = require('sequelize');
let { log } = console;
let dbName = process.env.DB_NAME || 'blog';
let dbUser = process.env.DB_USERNAME || 'root';
let dbPassword = process.env.DB_PASSWORD || '';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    log('Connection established');
  } catch (e) {
    log('Unable to connect. Try Again');
  }
}

module.exports = {
  sequelize,
  connectToDb
}
