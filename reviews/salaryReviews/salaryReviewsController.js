const Reviews = require('./salaryReviewsModel');

const getSalaryReviews = async (req, res) => {
  try {
    const salaryReviews = await Reviews.getReviews();
    return res.status(200).json(salaryReviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSalaryReviews,
};
