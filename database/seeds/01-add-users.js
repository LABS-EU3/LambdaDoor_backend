exports.seed = function(knex) {
  // Inserts seed entries
  return knex('table_name').insert([
    {
      full_name: 'Lisa Wilton',
      slack_id: 'Lisa Wilton',
      username: 'Lisawilton',
      email_address: 'lisa@lambdaschool.com',
      profile_picture: '',
    },
    {
      full_name: 'Chioma Nkem-Eze',
      slack_id: 'Jessica Eze',
      username: 'chiomaeze',
      email_address: 'chioma@lambdaschool.com',
      profile_picture: '',
    },
    {
      full_name: 'Victor Aworo',
      slack_id: 'Victor',
      username: 'Victor',
      email_address: 'vic@lambdaschool.com',
      profile_picture: '',
    },
    {
      full_name: 'Emily Abrahart',
      slack_id: 'Emily',
      username: 'Emily',
      email_address: 'emily@lambdaschool.com',
      profile_picture: '',
    },
    {
      full_name: 'Martins Onyedikachi',
      slack_id: 'Martins O-U',
      username: 'Martins O-U',
      email_address: 'mato@lambdaschool.com',
      profile_picture: '',
    },
  ]);
};
