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

module.exports = {
  findById,
  update,
  addImage,
};
