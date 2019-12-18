exports.seed = function(knex) {
  // Inserts seed entries
  return knex('salary_reviews').insert([
    {
      user_id: 1,
      company_id: 1,
      description: 'Accenture Programmer',
      salary: 95000,
      currency: 'USD',
      is_accepting_questions: 0,
    },
    {
      user_id: 2,
      company_id: 3,
      description: 'Software Engineer',
      salary: 98000,
      currency: 'USD',
      is_accepting_questions: 0,
    },
    {
      user_id: 3,
      company_id: 10,
      description: 'Junior Developer',
      salary: 3000000,
      currency: 'NGN',
      is_accepting_questions: 1,
    },
    {
      user_id: 4,
      company_id: 1,
      description: 'Accenture Technical Specialist',
      salary: 85000,
      currency: 'USD',
      is_accepting_questions: 1,
    },
    {
      user_id: 5,
      company_id: 13,
      description: 'Software Engineer',
      salary: '4800000',
      currency: 'NGN',
      is_accepting_questions: 0,
    },
  ]);
};
