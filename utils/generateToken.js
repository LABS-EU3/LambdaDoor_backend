const jwt = require('jsonwebtoken');

const generateToken = user => {
  const payload = {
    subject: user.id,
    email: user.email,
    fullName: user.fullName,
    profilePicture: user.profilePicture,
  };

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = generateToken;
