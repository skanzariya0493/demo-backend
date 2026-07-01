const User = require('../models/User');

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.create = async (userData) => {
  return await User.create(userData);
};
