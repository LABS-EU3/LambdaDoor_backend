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

function findUserById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function getClosest(id) {
  const user = await findUserById(id);
  console.log(user);
  return db('companies as c')
    .select(
      'c.id',
      'c.name',
      'c.website',
      'c.description',
      'c.latitude',
      'c.longitude'
    )
    .where(function() {
      this.where('c.latitude', '<', Number(user.latitude) + 0.5).andWhere(
        'c.latitude',
        '>',
        Number(user.latitude) - 0.5
      );
    })
    .andWhere(function() {
      this.where('c.longitude', '<', Number(user.longitude) + 0.5).andWhere(
        'c.longitude',
        '>',
        Number(user.longitude) - 0.5
      );
    });
}

module.exports = {
  getCompanies,
  getTopRated,
  findCompanyById,
  getClosest,
  findUserById,
};
