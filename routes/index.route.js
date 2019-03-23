const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const outletController= require('../application/controllers/outlet.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/outlet',outletController.find)

module.exports = router;
