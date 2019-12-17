const db = require('../database/db-config.js'); // This needs to be double-checked depending on the name chosen for the folder and the db-config file

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

module.exports = {
  findById,
  update,
};
