const db = require('../../database/db-config');

function findAll() {
  return db('interests');
}

function findById(id) {
  return db('interests')
    .where({ id })
    .first();
}

function findByUserId(userId) {
  return db('user_interests').where({ userId });
}

// eslint-disable-next-line camelcase
function insert(user_interests) {
  return db('user_interests')
    .insert(user_interests, 'id')
    .then(ids => {
      return findByUserId(ids[0]);
    });
}

function update(id, changes) {
  return db('user_interests')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('user_interests')
    .where('id', id)
    .del();
}

module.exports = {
  findAll,
  findById,
  findByUserId,
  insert,
  update,
  remove,
};
