const db = require('../database/db-config');

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update(changes, id) {
  return db('users')
    .update(changes)
    .where({ id });
}

function addImage(profilePicture) {
  return db('users')
    .insert(profilePicture, 'id')
    .returning('id');
}

function updateImage(changes, id) {
  return db('users')
    .update(changes)
    .where({ id });
}
// On looking at this code again I don't think I need both update and updateImage functions?

module.exports = {
  findById,
  update,
  addImage,
  updateImage,
};
