const request = require('supertest');
const server = require('../api/server');

describe('/ [GET]', () => {
  it('returns a 200 status', () => {
    return request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
});

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});
