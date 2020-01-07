const request = require('supertest');
const knex = require('../database/db-config');
const server = require('../api/server');

beforeAll(() => {
  knex.migrate.rollback();
  knex.migrate.latest();
  knex.seed.run();
});

// I changed the above code to the following few lines - this made my tests run on local. It may need to be changed to work with Circle CI

describe('userRouter', () => {
  describe('GET /users/:id', () => {
    test('returns a 200 response', async () => {
      const response = await request(server)
        .get('/users/1')
        .expect('Content-Type', /json/);
      expect(response.status).toEqual(200);
    });
    test('returns an error when user does not exist', async () => {
      const response = await request(server)
        .get('/users/10')
        .expect({ error: 'User does not exist' });
    });
  });
  describe('PUT /users/:id', () => {
    test('returns an error when user does not exist', async () => {
      const response = await request(server)
        .patch('/users/6')
        .send({
          full_name: 'Test 2',
        })
        .expect('Content-Type', /json/);
      expect(response.status).toEqual(401);
    });
    test('updates name successfully', async () => {
      const response = await request(server)
        .patch('/users/1')
        .send({
          full_name: 'Test 1',
        })
        .expect(200);
    });
    test('posts image successfully', async () => {
      const response = await request(server)
        .patch('/users/1')
        .send({
          profile_picture: 'testurl',
        });
      expect(response.status).toEqual(200);
    });
    test('updates image successfully', async () => {
      const response = await request(server)
        .patch('/users/1')
        .send({
          profile_picture: 'testurl2',
        })
        .expect(200);
    });
  });
});
