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
      'sr.is_accepting_questions'
    )
    .from('salary_reviews as sr')
    .leftJoin('companies as c', 'sr.company_id', 'c.id');
}

module.exports = {
  getReviews,
};
