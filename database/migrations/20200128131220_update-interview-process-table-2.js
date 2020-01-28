exports.up = function(knex) {
  return knex.schema.table('interview_process_reviews', table => {
    table.string('job_title');
    table
      .integer('interest_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('interests')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.table('interview_process_reviews', table => {
    table.integer('interest_id');
    table.string('job_title');
  });
};
