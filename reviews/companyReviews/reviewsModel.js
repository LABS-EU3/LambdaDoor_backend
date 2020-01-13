const db = require('../../database/db-config');

function getReviews(id) {
  return db('company_reviews').where({ user_id: id });
}

function findReviewById(id) {
  return db('company_reviews')
    .where({ id })
    .first();
}

function deleteReview(id) {
  return db('company_reviews')
    .where({ id })
    .del();
}

module.exports = {
  getReviews,
  findReviewById,
  deleteReview,
};
