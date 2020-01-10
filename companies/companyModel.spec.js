const db = require('../database/db-config');
const {
  getCompanies,
  getTopRated,
  findCompanyById,
} = require('./companyModel');

const testUsers = [
  {
    slack_id: 'slack_id1',
    username: 'user1',
    full_name: 'name1',
    email_address: 'email_address1',
    profile_picture: 'image_url1',
  },
  {
    slack_id: 'slack_id2',
    username: 'user2',
    full_name: 'name2',
    email_address: 'email_address2',
    profile_picture: 'image_url2',
  },
];

const testCompanies = [
  {
    id: 1,
    name: 'Test Company',
    website: 'www.web.co',
    location: 'here',
    longitude: '54.5',
    latitude: '5.4',
    type: 'tech company',
    description: 'This is a large tech company.',
    logo: 'some image',
  },

  {
    id: 2,
    name: 'Test Company2',
    website: 'www.web.co.co',
    location: 'here',
    longitude: '55.5',
    latitude: '6.4',
    type: 'finance company',
    description: 'This is a large finance company.',
    logo: 'another image',
  },
];

const testReviews = [
  {
    user_id: 1,
    company_id: 1,
    ratings: 4,
    is_currently_employed: true,
    review_headline: 'TestReview',
    review: 'This is a test review',
    is_accepting_questions: false,
  },
  {
    user_id: 2,
    company_id: 1,
    ratings: 3,
    is_currently_employed: true,
    review_headline: 'TestReview2',
    review: 'This is another test review',
    is_accepting_questions: false,
  },
];

describe('Company Models', () => {
  beforeAll(async () => {
    await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
    await db.raw('TRUNCATE companies RESTART IDENTITY CASCADE');
    await db.raw('TRUNCATE company_reviews RESTART IDENTITY CASCADE');
    await db('users').insert(testUsers);
    await db('companies').insert(testCompanies);
    await db('company_reviews').insert(testReviews);
  });
  describe('The getCompanies function', () => {
    it('gets all companies', async () => {
      const response = await getCompanies();
      expect(response.length).toEqual(2);
    });

    describe('The findBy function', () => {
      it('finds company by filter: id', async () => {
        const response = await findCompanyById(testCompanies[0].id);
        expect(response.id).toEqual(1);
      });

      it('returns undefined if company not found', async () => {
        const response = await findCompanyById(10);
        expect(response).toBeUndefined();
      });
    });

    afterAll(async () => {
      await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
      await db.raw('TRUNCATE companies RESTART IDENTITY CASCADE');
      await db.raw('TRUNCATE company_reviews RESTART IDENTITY CASCADE');
    });
  });
});
