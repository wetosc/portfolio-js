var express = require('express');
var router = express.Router();

var controller = require('../controllers/MemoController.js')

router.get('/', function(req, res, next) {
  controller.get(req,res)
});

router.get('/search', function(req, res, next) {
  controller.search(req,res)
});

router.get('/:memoID', function(req, res, next) {
  controller.getMemo(req,res)
});

module.exports = router;
