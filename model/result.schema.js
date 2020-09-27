const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Mixed = mongoose.Schema.Types.Mixed;

let result = new mongoose.Schema({
    name: String,
    postId: {
      type: ObjectId
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: String
    }
  }, { timestamps: true, versionKey: false });
 
module.exports = mongoose.model('result', result);  //userSL is name of database