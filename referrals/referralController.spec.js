const request = require('supertest');
const server = require('../api/server');

const test = {
  name: 'Chioma Nkem-Eze',
  senderEmail: 'fegaeze@gmail.com',
  recipientEmail: 'fegaeze@gmail.com',
  description: 'Thanks for your review, please refer me!',
};

describe('referralRouter', () => {
  describe('POST /referral', () => {
    test('returns a 200 response if request sent succesfully', async () => {
      const response = await request(server)
        .post('/referral')
        .send(test)
        .expect(200);

      expect(response.body.text).toBe('Referral sent successfully!');
    });

    // test("returns a 500 if the request doesn't have a body", async () => {
    //   await request(server)
    //     .post('/referral')
    //     .expect(500);
    // });
  });
});
