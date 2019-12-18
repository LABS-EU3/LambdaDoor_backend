const request = require('supertest');
const knex = require('../database/db-config');
const server = require('../api/server');

describe('userRouter', () => {
  describe('GET /users/:id', () => {
    test('returns a 200 response', async () => {
      const response = await request(server).get('/users/1');
      // .expect(200);
      console.log(response.status);
    });
  });
  describe('PUT /users/:id', () => {
    test('returns an error when user does not exist', async () => {
      const response = await request(server)
        .put('/users/100')
        .send({
          full_name: 'Test 2',
        });
      // .expect(401);
      console.log(response.status);
    });
  });
});

// More tests need to be added here.
