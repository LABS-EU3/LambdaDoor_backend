const db = require('../../database/db-config');
<<<<<<< HEAD
const { getReviews } = require('./salaryReviewsModel');

const testUser = {
=======
const {
  deleteSalaryReview,
  findSalaryReviewById,
  getUsersSalaryReviews,
  updateSalaryReview,
  salaryReviewByCompanyId,
} = require('./salaryReviewsModel');

const testUser2 = {
>>>>>>> 819aebbca8ac6f015918b74453b34deef88bcbfa
  full_name: 'Test 2',
  slack_id: 'slack_id_two',
  username: 'second_name',
  email_address: 'email_address_two',
  profile_picture: 'testurltwo',
};

<<<<<<< HEAD
const testCompany = {
=======
const interest2 = {
  interest: 'Software Engineer',
};
const testCompany2 = {
  id: 1,
>>>>>>> 819aebbca8ac6f015918b74453b34deef88bcbfa
  name: 'Accenture',
  website: 'www.accenture.com.',
  location: 'Atlanta, GA',
  longitude: -85.0,
  latitude: 33.7537,
  type: 'Business',
  logo: '',
  description: '',
};

<<<<<<< HEAD
const testSalaryReview = {
  user_id: 1,
  company_id: 1,
  text: 'null',
  description: 'Accenture Programmer',
  salary: '95000',
  currency: 'USD',
  is_accepting_questions: false,
  interest_id: 3,
=======
const testReview2 = {
  user_id: 1,
  company_id: 1,
  interest_id: 1,
  description: 'Acidic Scientist',
  salary: 95000,
  currency: 'USD',
  is_accepting_questions: 0,
  is_current_employee: 0,
>>>>>>> 819aebbca8ac6f015918b74453b34deef88bcbfa
};

describe('Review Models', () => {
  beforeAll(async () => {
    await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
    await db.raw('TRUNCATE companies RESTART IDENTITY CASCADE');
    await db.raw('TRUNCATE salary_reviews RESTART IDENTITY CASCADE');
<<<<<<< HEAD

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
=======
    await db.raw('TRUNCATE interests RESTART IDENTITY CASCADE');

    await db('users').insert(testUser2);
    await db('companies').insert(testCompany2);
    await db('interests').insert(interest2);
    await db('salary_reviews').insert(testReview2);
  });
  describe('getSalaryReviews function', () => {
    it('gets all salary reviews for a company id', async () => {
      const actual = await salaryReviewByCompanyId(1);
      expect(actual.length).toBe(1);
    });
  });
  describe('getSalaryReviews function', () => {
    it('gets all salary reviews for a user id', async () => {
      const actual = await getUsersSalaryReviews(1);
      expect(actual.length).toEqual(1);
    });

    it('returns undefined if user not found', async () => {
      const actual = await getUsersSalaryReviews(2);
      expect(actual.length).toEqual(0);
    });
  });
  describe('findSalaryReview function', () => {
    it('find salary review by review id', async () => {
      const actual = await findSalaryReviewById(1);
      expect(actual.id).toEqual(1);
    });

    it('returns undefined if salary review is not found', async () => {
      const actual = await findSalaryReviewById(3);
      expect(actual).toBeUndefined();
    });
  });
  describe('updateUserSalaryReview function', () => {
    it('updates a salary review', async () => {
      await updateSalaryReview(1, { description: 'Data Scientist' });
      const actual = await findSalaryReviewById(1);
      expect(actual.description).toEqual('Data Scientist');
    });
  });
  describe('deleteSalaryReview function', () => {
    it('deletes a salary review', async () => {
      await deleteSalaryReview(1);
      const actual = await getUsersSalaryReviews(1);
      expect(actual.length).toEqual(0);
    });
  });

  afterAll(async () => {
    await db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
  });
>>>>>>> 819aebbca8ac6f015918b74453b34deef88bcbfa
});
