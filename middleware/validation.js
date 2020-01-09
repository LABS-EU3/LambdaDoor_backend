const Users = require('../users/userModel');

const userExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  userExists,
};
