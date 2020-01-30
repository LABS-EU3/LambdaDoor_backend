const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const transporter = require('../utils/nodemailer');

const source = fs.readFileSync(
  path.join(__dirname, '../templates/referral.hbs'),
  'utf8'
);

const template = Handlebars.compile(source);

const sendMail = async (req, res) => {
  const { name, description, email } = req.body;

  transporter.sendMail(
    {
      from: 'support@lambdadoor.com',
      to: email,
      subject: 'Lambdadoor: Referral Request',
      html: template({
        message: description,
        name,
      }),
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
