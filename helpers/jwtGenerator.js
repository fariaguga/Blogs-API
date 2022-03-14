const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET || 'Batatinha123';

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);