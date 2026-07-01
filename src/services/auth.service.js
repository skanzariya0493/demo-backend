const bcrypt = require('bcryptjs');
const authRepository = require('../repositories/auth.repository');
const jwt = require('../utils/jwt');

exports.register = async ({ name, email, password }) => {
  const existingUser = await authRepository.findByEmail(email);

  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await authRepository.create({ name, email, password: hashedPassword });

  return { message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } };
};

exports.login = async ({ email, password }) => {
  const user = await authRepository.findByEmail(email);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id, email: user.email });

  return { message: 'Login successful', token };
};
