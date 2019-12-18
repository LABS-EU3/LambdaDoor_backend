const Users = require('./userModel');

const userExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({ error: 'User does not exist' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  userExists,
};
