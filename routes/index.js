var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS-Express', name: 'Satyadev Golla' });
});

module.exports = router;