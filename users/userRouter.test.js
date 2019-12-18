const request = require('supertest');
const knex = require('../database/db-config');
const server = require('../api/server');

describe('userRouter', () => {
  describe('GET /users/:id', () => {
    test('returns a 200 response', async () => {
      const response = await request(server)
        .get('/users/1')
        .expect(200);
    });
  });
});
