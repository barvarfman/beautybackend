

module.exports = {
  SendMailP
}
require ('dotenv').config();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: process.env.EMAIL,
  to: '',
  subject: 'נקבע לך תור אצל מספרת קובי',
  text: ''
};

function SendMailP(emailObj){
  if(!emailObj.email)  mailOptions.to=['barvartest@gmail.com']
   else mailOptions.to=[emailObj.email,'barvartest@gmail.com']
    mailOptions.text=emailObj.bodyText
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
