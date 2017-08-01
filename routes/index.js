var express = require('express');
var router = express.Router();

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
module.exports = router;
