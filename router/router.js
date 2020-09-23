const express = require('express')
const router = express.Router()

const controller = require('../controller/controller') 

var bodyParser = require("body-parser"); //for parsing data from input
var encoder = bodyParser.urlencoded({ extended: true });


router.post('/add',encoder ,controller.add)
router.get('/', controller.getList)

module.exports = router