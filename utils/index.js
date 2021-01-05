const jwt = require('jsonwebtoken');

const generateToken = (data) => {
  return jwt.sign(data, 'mysecrethash', { expiresIn: '1y' });
};

module.exports = {
  generateToken,
};
