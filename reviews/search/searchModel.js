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

// function interviewSearch(searchTerms) {
//     return db
//     .select('*')
//     .from('interview_process_reviews as i')
//     .leftJoin('')
// }

module.exports = {
  companySearch,
  interviewSearch,
};
