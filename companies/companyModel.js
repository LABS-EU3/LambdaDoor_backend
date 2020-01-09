const db = require('../database/db-config');

function getCompanies() {
  return db('companies');
}

function getTopRated() {
  return db
    .select('c.id', 'c.name', 'c.description')
    .avg('cr.ratings as average_rating')
    .from('companies as c')
    .leftJoin('company_reviews as cr', 'c.id', 'cr.company_id')
    .groupBy('c.id', 'c.name', 'c.description')
    .orderBy('average_rating', 'desc')
    .whereNotNull('cr.ratings')
    .limit(5);
}

function findCompanyById(id) {
  return db('companies')
    .where({ id })
    .first();
}

module.exports = {
  getCompanies,
  getTopRated,
  findCompanyById,
};
