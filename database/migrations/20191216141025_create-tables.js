exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id');
      table.string('full_name', 128).notNullable();
      table.varchar('slack_id').notNullable();
      table.varchar('username').notNullable();
      table
        .string('email_address', 128)
        .unique()
        .notNullable();
      table.varchar('profile_picture', 240);
      table.timestamps('created_at');
    })
    .createTable('companies', table => {
      table.increments('id');
      table.varchar('name', 128).notNullable();
      table.varchar('website');
      table.varchar('location');
      table.string('type', 128);
      table.varchar('logo', 128);
      table.varchar('description', 128);
      table.timestamps('created_at');
    })
    .createTable('interests', table => {
      table.increments('id');
      table
        .integer('user_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.varchar('interests', 128);
    })
    .createTable('company_reviews', table => {
      table.increments('id');
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('company_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('companies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer('ratings', 128);
      table.boolean('is_currently_employed');
      table.varchar('review_headline');
      table.varchar('review');
      table.boolean('is_accepting_questions');
      table.timestamps('created_at');
    })
    .createTable('interview_process_reviews', table => {
      table.increments('id');
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('company_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('companies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.varchar('text');
      table.timestamps('created_at');
    })
    .createTable('salary_reviews', table => {
      table.increments('id');
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('company_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('companies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.varchar('text');
      table.boolean('is_accepting_questions');
      table.timestamps('created_at');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('salary_reviews')
    .dropTableIfExists('interview_process_reviews')
    .dropTableIfExists('company_reviews')
    .dropTableIfExists('interests')
    .dropTableIfExists('companies')
    .dropTableIfExists('users');
};
