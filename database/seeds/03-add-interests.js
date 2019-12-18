exports.seed = function(knex) {
  // Inserts seed entries
  return knex('interests').insert([
    { user_id: 1, interests: 'Front End' },
    { user_id: 1, interests: 'Back End' },
    { user_id: 1, interests: 'Full Stack' },
    { user_id: 1, interests: 'Data Science' },
    { user_id: 1, interests: 'Machine Learning' },
    { user_id: 2, interests: 'Front End' },
    { user_id: 2, interests: 'Back End' },
    { user_id: 2, interests: 'Full Stack' },
    { user_id: 2, interests: 'User Experience' },
    { user_id: 2, interests: 'Data Science' },
    { user_id: 3, interests: 'Front End' },
    { user_id: 3, interests: 'Back End' },
    { user_id: 3, interests: 'Full Stack' },
    { user_id: 3, interests: 'Product Manager' },
    { user_id: 4, interests: 'Front End' },
    { user_id: 5, interests: 'Front End' },
    { user_id: 5, interests: 'Back End' },
    { user_id: 5, interests: 'Full Stack' },
    { user_id: 5, interests: 'Mobile Development' },
    { user_id: 5, interests: 'Data Science' },
  ]);
};
