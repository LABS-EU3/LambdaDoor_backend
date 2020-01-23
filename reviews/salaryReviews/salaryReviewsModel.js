const db = require('../../database/db-config');

function getReviews() {
  return db
    .select(
      'sr.id',
      'sr.user_id',
      'sr.company_id',
      'sr.text',
      'c.name as company_name',
      'sr.description',
      'sr.salary',
      'sr.currency',
      'sr.is_accepting_questions',
      'sr.is_anonymous',
      'sr.job_title',
      'sr.interest_id'
    )
    .from('salary_reviews as sr')
    .leftJoin('companies as c', 'sr.company_id', 'c.id');
}

function getAvgReviewsByCompany(id) {
  return db
    .select('sr.interest_id', 'i.interest', 'sr.currency')
    .from('salary_reviews as sr')
    .leftJoin('interests as i', 'sr.interest_id', 'i.id')
    .avg('salary')
    .groupBy('sr.interest_id', 'i.interest', 'sr.currency')
    .where('company_id', '=', id);
}

function salaryReviewByCompanyId(id) {
  return db
    .select(
      'sr.id',
      'sr.description',
      'sr.salary',
      'sr.currency',
      'sr.interest_id',
      'i.interest',
      'c.name'
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
      'i.id',
      'sr.is_accepting_questions',
      'sr.is_current_employee',
      'c.name'
    )
    .from('salary_reviews as sr')
    .join('companies as c', 'c.id', 'sr.company_id')
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
      'sr.interest_id',
      'c.name'
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
  getReviews,
  getAvgReviewsByCompany,
  getUsersSalaryReviews,
  findSalaryReviewById,
  deleteSalaryReview,
  updateSalaryReview,
  insertSalaryReview,
  salaryReviewByCompanyId,
};
