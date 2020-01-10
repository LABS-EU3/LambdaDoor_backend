const Interests = require('./interestsModel');

const getInterests = async (req, res) => {
  try {
    const interests = await Interests.findAll();
    return res.status(200).json(interests);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getInterests,
};
