const express = require('express');
const dotenv = require('dotenv');
const cookie = require('cookie-parser');

dotenv.config();

const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('../users/index');
const interestRouter = require('../users/interests/index');

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


server.get('/', (req, res) => {
  return res.json({ message: 'API is up 🚀' });
});

module.exports = server;
