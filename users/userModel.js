const db = require('../database/db-config');

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('users')
    .where('slack_id', '=', filter)
    .first();
}

function insert(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db('users')
    .update(changes)
    .where({ id });
}

function addImage(id, profilePicture) {
  return db('users')
    .update(profilePicture)
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
  findBy,
  insert,
  update,
  addImage,
  getUserById,
  addInterest,
  findInterestById,
 
};
