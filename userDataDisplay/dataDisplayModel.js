const db = require('../database/db-config');

const JobRole = () => {
  return db('salary_reviews').select('interest_id');
};

module.exports = {
  JobRole,
};
