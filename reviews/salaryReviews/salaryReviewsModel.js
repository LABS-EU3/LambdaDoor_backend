const db = require('../../database/db-config');

function getReviews() {
  return db('salary_reviews');
}

module.exports = {
  getReviews,
};
