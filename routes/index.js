var express = require('express');
var router = express.Router();


var nodemailer=require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/volunteers', function(req, res, next) {
  res.render('volunteers', { title: 'Volunteers' });
});

router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Schedule' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/test',function(req,res,next){
  let poolConfig = require('../smtp.js').poolConfig;
  var smtpTransport = nodemailer.createTransport(poolConfig, {});
  //console.log('hello');
  //console.log(smtpTransport);
  var mailOptions = {
    from: 'ashakiran@students.iiit.ac.in',
    to: 'ksubbu199@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  smtpTransport.sendMail(mailOptions, function(error, info){
    res.send(error);
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  });
res.end();
});
module.exports = router;
