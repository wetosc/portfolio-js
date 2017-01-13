var express = require('express');
var router = express.Router();

const controller = require('../controllers/IndexController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	controller.get(req,res);
});

module.exports = router;
