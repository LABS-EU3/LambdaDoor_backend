const request = require('supertest');
const db = require('../database/db-config');
const server = require('../api/server');

beforeAll(async () => {
  await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
});

const testUser = {
  slack_id: 'slack_id',
  name: 'name',
  email_address: 'email_address',
  img_72: 'image_url',
};

describe('userRouter', () => {
  let cookie;
  describe('POST /users/', () => {
    test('returns a 200 response', async () => {
      const response = await request(server)
        .post('/users/')
        .send(testUser)
        .expect({ error: 'test' });
      console.log(response);
      cookie = response.headers['set-cookie'];
    });
  });

  describe('GET /users/:id', () => {
    test('returns a 200 response', async () => {
      const response = await request(server)
        .get('/users/1')
        .set('Cookie', cookie)
        .expect('Content-Type', /json/)
        .expect(200);
    });
    test('returns an error when user does not exist', async () => {
      const response = await request(server)
        .get('/users/10')
        .set('Cookie', cookie)
        .expect(400)
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
        .set('Cookie', cookie)
        .expect('Content-Type', /json/);
      expect(response.status).toEqual(400);
    });
    test('updates name successfully', async () => {
      const response = await request(server)
        .patch('/users/1')
        .send({
          full_name: 'Test 1',
        })
        .set('Cookie', cookie)
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
  });
});
