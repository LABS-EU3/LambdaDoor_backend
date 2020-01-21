const db = require('../../database/db-config');
const { getReviews } = require('./salaryReviewsModel');

const testUser = {
  full_name: 'Test 2',
  slack_id: 'slack_id_two',
  username: 'second_name',
  email_address: 'email_address_two',
  profile_picture: 'testurltwo',
};

const testCompany = {
  name: 'Accenture',
  website: 'www.accenture.com.',
  location: 'Atlanta, GA',
  longitude: -85.0,
  latitude: 33.7537,
  type: 'Business',
  logo: '',
  description: '',
};

const testSalaryReview = {
  user_id: 1,
  company_id: 1,
  text: 'null',
  description: 'Accenture Programmer',
  salary: '95000',
  currency: 'USD',
  is_accepting_questions: false,
  interest_id: 3,
};

describe('Review Models', () => {
  beforeAll(async () => {
    await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
    await db.raw('TRUNCATE companies RESTART IDENTITY CASCADE');
    await db.raw('TRUNCATE salary_reviews RESTART IDENTITY CASCADE');

    await db('users').insert(testUser);
    await db('companies').insert(testCompany);
    await db('salary_reviews').insert(testSalaryReview);
  });
  describe('getReviews function', () => {
    it('gets all salary reviews', async () => {
      const actual = await getReviews();
      expect(actual.length).toEqual(1);
    });

    afterAll(async () => {
      await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
    });
  });
});
