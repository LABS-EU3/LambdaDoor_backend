const db = require('../database/db-config');
const Users = require('../users/userModel');

const testUser = {
  full_name: 'Mr Test',
  email_address: 'test@test.com',
  profile_picture: '',
  slack_id: 'testy',
  username: 'testy',
};

// beforeAll(() => {
//   return knex.seed.run();
// });

// describe('userRouter', () => {
//     describe("Get user by id", () => {
//         test()
//     })
// })
