const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'No token passed' });

  return jwt.verify(
    authorization,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) return res.status(401).json('Your token is invalid');
      req.userId = decoded.subject;
      return next();
    }
  );
};

module.exports = verifyToken;
