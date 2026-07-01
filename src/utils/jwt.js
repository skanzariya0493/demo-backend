const jwt = require('jsonwebtoken');

exports.sign = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });
};

exports.verify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
};
