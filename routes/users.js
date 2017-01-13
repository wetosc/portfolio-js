var express = require('express');
var router = express.Router();

var userController = require('../controllers/UserController.js')

router.get('/', function(req, res, next) {
  userController.get(req,res)
});

router.get('/search', function(req, res, next) {
  userController.search(req,res)
});

router.get('/login', function(req, res, next) {
  userController.login(req,res)
});
router.post('/login', function(req, res, next) {
  userController.login(req,res)
});
router.get('/logout', function(req, res, next) {
  userController.logout(req,res)
});




router.get('/:userID', function(req, res, next) {
  userController.getUser(req,res)
});

module.exports = router;
