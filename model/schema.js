const mongoose = require('mongoose')
let jobPost = new mongoose.Schema({
name: String,
email: String,
password: String
});
 
module.exports = mongoose.model('jobDB', jobPost);  //userSL is name of database