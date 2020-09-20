require('dotenv').config();
const nodemailer = require('nodemailer');

const transport = {
  //all of the configuration for making a site send an email.
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log(success, 'Nodemailer is Up!, and ready to send Email....');
  }
});

module.exports = transporter;
