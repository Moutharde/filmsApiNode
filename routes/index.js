var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
	console.log("Je suisdans la page film");
  res.render('index', { title: 'Test' });
});
router.get('/film', function(req, res, next) {
	console.log(req);
  res.render('film', { title: 'Film' });
  
});
router.get('/contact', function(req, res, next) {
	console.log(req);
  res.render('contact', { title: 'Test' });
});

module.exports = router;
