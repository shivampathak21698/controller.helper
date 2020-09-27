require('dotenv').config();

const express = require('express')
const app = express()
const commonRouter = require('./router/common.router')
var bodyParser = require("body-parser"); //for parsing data from input

app.use(express.json())


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', commonRouter)



PORT = process.env.PORT || 4000;
app.listen(PORT)