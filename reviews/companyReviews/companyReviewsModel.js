const db = require('../../database/db-config');

function getAllUserReviews(id) {
  return db
    .select(
      'cr.id',
      'cr.ratings',
      'cr.is_currently_employed',
      'cr.review_headline',
      'cr.review',
      'cr.is_accepting_questions',
      'c.name',
      'cr.user_id'
    )
    .from('company_reviews as cr')
    .join('companies as c', 'cr.company_id', 'c.id')
    .where('cr.user_id', '=', id);
}

function findReviewById(id) {
  return db
    .select(
      'cr.id',
      'cr.ratings',
      'cr.is_currently_employed',
      'cr.review_headline',
      'cr.review',
      'cr.is_accepting_questions',
      'c.name',
      'cr.user_id'
    )
    .from('company_reviews as cr')
    .join('companies as c', 'cr.company_id', 'c.id')
    .where('cr.id', '=', id)
    .first();
}

function deleteReview(id) {
  return db('company_reviews')
    .where({ id })
    .del();
}

function updateReview(id, changes) {
  return db('company_reviews')
    .where({ id })
    .update(changes);
}

function insert(review) {
  return db('company_reviews')
    .insert(review, 'id')
    .then(ids => {
      return findReviewById(ids[0]);
    });
}

module.exports = {
  getAllUserReviews,
  findReviewById,
  deleteReview,
  updateReview,
  insert,
};
