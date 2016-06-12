var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('default', {title: 'About', message: 'A short biography'});
});

module.exports = router;
