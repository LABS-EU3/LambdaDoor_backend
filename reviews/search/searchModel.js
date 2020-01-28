const db = require('../../database/db-config');

function companySearch(searchTerms) {
  return db
    .select('*')
    .from('companies as c')
    .whereRaw(
      'LOWER(c.name) LIKE ?',
      `%${searchTerms.search_query.toLowerCase()}%`
    )
    .orWhereRaw(
      'LOWER(c.location) LIKE ?',
      `%${searchTerms.search_query.toLowerCase()}%`
    );
}

function interviewSearch(searchTerms) {
  return db
    .select('*', 'i.interest', 'c.location')
    .from('interview_process_reviews as ipr')
    .leftJoin('interests as i', 'ipr.interest_id', 'i.id')
    .leftJoin('companies as c', 'ipr.company_id', 'c.id')
    .whereRaw(
      'LOWER(i.interest) LIKE ?',
      `%${searchTerms.search_query.toLowerCase()}%`
    )
    .orWhereRaw(
      'LOWER(c.location) LIKE ?',
      `%${searchTerms.search_query.toLowerCase()}%`
    );
}

module.exports = {
  companySearch,
  interviewSearch,
};
