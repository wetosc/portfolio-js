var express = require('express');
var router = express.Router();

var controller = require('../controllers/PostController.js')

router.get('/', function(req, res, next) {
  controller.get(req,res)
});

router.get('/search', function(req, res, next) {
  controller.search(req,res)
});

router.get('/:postID', function(req, res, next) {
  controller.getPost(req,res)
});

module.exports = router;

