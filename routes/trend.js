var express = require('express');
var router = express.Router();

/* GET home page. */
//trend
router.get('/', function(req, res, next) {
  res.render('trend_population', { title: 'Express' });
});

router.get('/population', function(req, res, next) {
  res.render('trend_population', { title: 'Express' });
});

router.get('/logistics', function(req, res, next) {
  res.render('trend_logistics', { title: 'Express' });
});

router.get('/retail', function(req, res, next) {
  res.render('trend_retail', { title: 'Express' });
});

router.get('/card', function(req, res, next) {
  res.render('trend_card', { title: 'Express' });
});
module.exports = router;
