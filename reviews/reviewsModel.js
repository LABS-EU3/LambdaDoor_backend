const db = require('../database/db-config');

function getReviews(id) {
  return db
    .select(
      'cr.id',
      'cr.ratings',
      'cr.is_currently_employed',
      'cr.review_headline',
      'cr.review',
      'cr.is_accepting_questions',
      'c.name'
    )
    .from('company_reviews as cr')
    .join('companies as c', 'cr.company_id', 'c.id')
    .where('cr.user_id', '=', id);
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
