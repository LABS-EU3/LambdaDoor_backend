const db = require('../../database/db-config');

function salaryReviewByCompanyId(id) {
  return db
    .select(
      'sr.id',
      'sr.description',
      'sr.salary',
      'sr.currency',
      'sr.interest_id',
      'i.interest'
    )
    .from('companies as c')
    .join('salary_reviews as sr', 'sr.company_id', 'c.id')
    .leftJoin('interests as i', 'sr.interest_id', 'i.id')
    .where('c.id', '=', id);
}

function getUsersSalaryReviews(id) {
  return db
    .select(
      'sr.id',
      'sr.company_id',
      'sr.description',
      'sr.salary',
      'sr.currency',
      'i.interest',
      'sr.is_accepting_questions',
      'sr.is_current_employee'
    )
    .from('salary_reviews as sr')
    .leftJoin('interests as i', 'sr.interest_id', 'i.id')
    .where('sr.user_id', '=', id);
}

function findSalaryReviewById(id) {
  return db
    .select(
      'sr.id',
      'sr.description',
      'sr.salary',
      'sr.currency',
      'sr.interest_id'
    )
    .from('salary_reviews as sr')
    .join('companies as c', 'sr.company_id', 'c.id')
    .where('sr.id', '=', id)
    .first();
}

function deleteSalaryReview(id) {
  return db('salary_reviews')
    .where({ id })
    .del();
}

function updateSalaryReview(id, changes) {
  return db('salary_reviews')
    .where({ id })
    .update(changes);
}

function insertSalaryReview(review) {
  return db('salary_reviews')
    .insert(review, 'id')
    .then(ids => {
      return findSalaryReviewById(ids[0]);
    });
}

module.exports = {
  getUsersSalaryReviews,
  findSalaryReviewById,
  deleteSalaryReview,
  updateSalaryReview,
  insertSalaryReview,
  salaryReviewByCompanyId,
};
