const db = require('../database/db-config');

const JobRole = () => {
  return db
    .from('salary_reviews as sr')
    .leftJoin('interests as i', 'sr.interest_id', 'i.id')
    .select('i.interest', 'i.id')
    .count('*')
    .groupBy('i.interest', 'i.id');
};

module.exports = {
  JobRole,
};
