const express = require('express');
const dotenv = require('dotenv');
const cookie = require('cookie-parser');

dotenv.config();

const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('../users/index');
const interestRouter = require('../users/interests/index');
const companiesRouter = require('../companies/index');
const dataDisplay = require('../userDataDisplay/index');
const companyReviewsRouter = require('../reviews/companyReviews/index');
const salaryReviewRouter = require('../reviews/salaryReviews/index');
const interviewReviewRouter = require('../reviews/interviewReviews/index');

const server = express();

server.use(
  cors({
    origin: [
      `${process.env.FRONT_URL}`,
      'http://localhost:3000',
      'https://lambdadoor.netlify.com',
      'https://lambdadoor.com',
      '*',
    ],
    credentials: true,
  })
);

server.use(cookie());
server.use(helmet());
server.use(express.json());

server.use('/users', userRouter);
server.use('/interests', interestRouter);
server.use('/companies', companiesRouter);
server.use('/dataDisplay', dataDisplay);
server.use('/companyreviews', companyReviewsRouter);
server.use('/salaryreviews', salaryReviewRouter);
server.use('/interviewreviews', interviewReviewRouter);

server.get('/', (req, res) => {
  return res.json({ message: 'API is up 🚀' });
});

module.exports = server;
