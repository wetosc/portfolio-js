var express = require('express');
var router = express.Router();

// var userController = require('../controllers/UserController.js')

router.get('/', function(req, res, next) {
  controller.get(req,res)
});

router.get('/search', function(req, res, next) {
  controller.search(req,res)
});

router.get('/:projectID', function(req, res, next) {
  controller.getProject(req,res)
});

module.exports = router;

