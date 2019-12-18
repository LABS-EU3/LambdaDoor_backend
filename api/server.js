const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('../users/userRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', userRouter);

server.get('/', (req, res) => {
  return res.json({ message: 'API is up 🚀' });
});

module.exports = server;
