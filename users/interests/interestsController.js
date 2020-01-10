const Interests = require('./interestsModel');

const getInterests = async (req, res) => {
  try {
    const interests = await Interests.findAll();
    return res.status(200).json(interests);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getInterest = async (req, res) => {
  try {
    return res.status(200).json(req.interest);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getUserInterests = async (req, res) => {
  try {
    const interests = await Interests.findByUserId(req.params.id);
    return res.status(200).json(interests);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getInterests,
  getInterest,
  getUserInterests,
};
