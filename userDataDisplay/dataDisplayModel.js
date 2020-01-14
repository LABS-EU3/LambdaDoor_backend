const db = require('../database/db-config');

const JobRole = () => {
  return db('salary_reviews').select('description');
};

module.exports = {
  JobRole,
};
