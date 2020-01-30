const fs = require('fs');
const path = require('path');
const transporter = require('../utils/nodemailer');

const sendMail = async (req, res) => {
  const { name, description, senderEmail, recipientEmail } = req.body;

  transporter.sendMail(
    {
      from: 'support@lambdadoor.com',
      to: recipientEmail,
      subject: 'Lambda Door: Referral Request',
      template: 'referral',
      context: {
        message: description,
        email: senderEmail,
        name,
      },
    },
    (error, data) => {
      if (error) {
        return res.status(500).json(error);
      }

      return res.status(200).json({
        text: 'Referral sent successfully!',
      });
    }
  );
};

module.exports = {
  sendMail,
};
