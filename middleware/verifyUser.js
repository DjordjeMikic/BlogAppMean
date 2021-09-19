let jwt = require('jsonwebtoken');

const verifyUser = async (req, res, next) => {
  if(req.headers['authorization']) {
    let data = await jwt.verify(req.headers['authorization'], process.env.TOKEN_AUTH);
    req.auth = data;
    if(Object.keys(data).length) {
      next();
      return;
    }
    res.status(403).json('Forbidden access');
  }
}

module.exports = verifyUser;
