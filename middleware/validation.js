const Users = require('../users/userModel');
const Interests = require('../users/interests/interestsModel');

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

const interestExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const interest = await Interests.findById(id);
    if (!interest) {
      return res.status(400).json({ error: 'interest does not exist' });
    }
    req.interest = interest;
    return next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const userInterestExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const interest = await Interests.findUserInterestById(id);
    if (!interest) {
      return res.status(400).json({ error: 'user interest does not exist' });
    }
    req.interest = interest;
    return next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  userExists,
  interestExists,
  userInterestExists,
};
