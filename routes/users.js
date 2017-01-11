var express = require('express');
var router = express.Router();

var userController = require('../controllers/UserController.js')

router.get('/', function(req, res, next) {
  userController.get(req,res)
});

router.get('/search', function(req, res, next) {
  userController.search(req,res)
});

module.exports = router;
