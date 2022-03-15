const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || token === undefined) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decoded.data;

    next();
  } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = { auth };