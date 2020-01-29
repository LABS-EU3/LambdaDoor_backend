/* eslint-disable camelcase */
const Reviews = require('./interviewReviewModel');

const getInterviewReviewsByCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const salaryReviews = await Reviews.interviewReviewByCompanyId(id);
    return res.status(200).json(salaryReviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserInterviewReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const userReviews = await Reviews.getUsersInterviewReviews(id);
    return res.status(200).json(userReviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUserInterviewReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Reviews.deleteInterviewReview(id);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findUserInterviewReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Reviews.findInterviewReviewById(id);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUserInterviewReview = async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    await Reviews.updateInterviewReview(id, changes);
    const updatedReview = await Reviews.findInterviewReviewById(id);
    return res.status(200).json(updatedReview);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const addInterviewReview = async (req, res) => {
  try {
    const {
      user_id,
      company_id,
      text,
      created_at,
      is_accepting_questions,
      is_current_employee,
    } = req.body;
    const review = await Reviews.insertInterviewReview({
      user_id,
      company_id,
      text,
      is_accepting_questions,
      is_current_employee,
      created_at,
    });
    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getInterviewReviewsByCompany,
  getUserInterviewReviews,
  deleteUserInterviewReview,
  findUserInterviewReviewById,
  updateUserInterviewReview,
  addInterviewReview,
};
