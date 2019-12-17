const Users = require('./user-model');

const userExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    req.user = user;
    next();
  } catch (error) {
    next(new Error('Error - user does not exist'));
  }
};

module.exports = {
  userExists,
};
