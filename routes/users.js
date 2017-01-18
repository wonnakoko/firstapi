var express = require('express');
var router = express.Router();
var models = require("../models");
/* GET users listing. */
router.get('/', function(req, res, next) {
  models.customer.findAll().then(function(customers){
      res.send(customers);
  });
});

module.exports = router;