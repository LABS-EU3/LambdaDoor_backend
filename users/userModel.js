const db = require('../database/db-config');

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db('users')
    .update(changes)
    .where({ id });
}

function addImage(id, profile_picture) {
  return db('users')
    .update(profile_picture)
    .where({ id });
}

function getUserById(id) {
  return db
    .select(
      'u.id',
      'u.full_name',
      'u.email_address',
      'u.profile_picture',
      'u.location',
      'u.longitude',
      'u.latitude',
      'i.interests'
    )
    .from('users as u')
    .join('interests as i', 'u.id', 'i.id')
    .where('u.id', id);
}

function findInterestById(id) {
  return db('interests')
    .where({ id })
    .first();
}

function addInterest(interest) {
  return db('interests')
    .insert(interest, 'id')
    .then(ids => {
      const [id] = ids;
      return findInterestById(id);
    });
}

module.exports = {
  findById,
  update,
  addImage,
  getUserById,
  addInterest,
  findInterestById,
};
