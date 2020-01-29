const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 587,
  secure: true,
  auth: {
    user: 'support@lambdadoor.com',
    pass: '@Ldoor2020',
  },
});

module.exports = transporter;