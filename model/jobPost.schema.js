const mongoose = require('mongoose');
const Mixed = mongoose.Schema.Types.Mixed;

let jobPost = new mongoose.Schema({
    name: {
      type: String
    },
    postDate: {
      type: String
    },
    shortInfo: {
      type: String
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    lastFeeDate: {
      type: String
    },
    examDate: {
      type: String
    },
    admitCardDate: {
      type: String
    },
    applicationFee: {
      gen: {
        type: String
      },
      obc: {
        type: String
      },
      sc: {
        type: String
      },
      st: {
        type: String
      }
    },
    paymentTypes: {
      type: [
        String
      ]
    },
    eligibility: {
      eduString: {
        type: String
      },
      "minimum-edu": {
        degree: {
          type: String
        },
        stream: {
          type: String
        },
        percentage: {
          type: String
        }
      },
      age: {
        startFrom: {
          type: Date
        },
        min: {
          type: String
        },
        max: {
          type: Date
        }
      }
    },
    tags: {
      type: [
        String
      ]
    },
    vacancy: {
      type: [
        Mixed
      ]
    }
  }, {timestamps: true, versionKey: false});
 
module.exports = mongoose.model('jobPost', jobPost);  //userSL is name of database