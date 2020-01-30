const nodemailer = require('nodemailer');

const transporter = () => {
  return nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'support@lambdadoor.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

module.exports = transporter;