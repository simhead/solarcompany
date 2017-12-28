var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', {
		title : 'Home'
	});
});

router.get('/about', function(req, res) {
	res.render('about', {
		title : 'About'
	});
});

router.get('/contact', function(req, res) {
	res.render('contact', {
		title : 'Contact'
	});
});

router.get('/product', function(req, res) {
	res.render('product', {
		title : 'Product'
	});
});

router.get('/service', function(req, res) {
	res.render('service', {
		title : 'Service'
	});
});

module.exports = router;
