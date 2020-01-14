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
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findUserReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Reviews.findReviewById(id);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUserReview = async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    await Reviews.updateReview(id, changes);
    const updatedReview = await Reviews.findReviewById(id);
    return res.status(200).json(updatedReview);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserReviews,
  deleteUserReview,
  updateUserReview,
  findUserReviewById,
};
