const request = require('supertest');
const assert = require('assert');
const db = require('../database/db-config');
const server = require('../api/server');

beforeAll(async () => {
  await db.raw('TRUNCATE companies RESTART IDENTITY CASCADE');
});

describe('companyRouter', () => {
  describe('GET /companies', () => {
    test('returns a 200 response', async () => {
      const response = await request(server)
        .get('/companies')
        .expect(200);
    });
    test('returns a json object', async () => {
      const response = await request(server)
        .get('/companies')
        .expect('Content-Type', /json/);
    });
    test('returns an empty array when the database is empty', async () => {
      const response = await request(server)
        .get('/companies')
        .expect([]);
    });

    afterAll(async () => {
      await db.raw('TRUNCATE companies RESTART IDENTITY CASCADE');
    });
  });
});
