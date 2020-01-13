const Reviews = require('./companyReviewsModel');

const getUserReviews = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const userReviews = await Reviews.getReviews(id);
    return res.status(200).json(userReviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUserReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Reviews.deleteReview(id);
    return res.status(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserReviews,
  deleteUserReview,
};
