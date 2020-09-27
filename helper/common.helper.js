const dbModelMapping = {
    'job-post': require('../model/jobPost.schema'),
    'result': require('../model/result.schema')
    // 'job-post': require('../model/result.schema')
}

const helper = {}

helper.add = async (type, reqBody) => {

    const { name, post, requirements } = reqBody;
    const data = new dbModelMapping[type]({
        name,
        post,
        requirements
    })
    return new Promise((resolve, reject) => {
        data.save((err, data) => {
            if (err) {
                return reject("data is not saved")
            }
            if (data) {
                console.log("data is saved")
                return resolve(data)
            }
        })
    })

}

helper.getList = async (type) => {
    return new Promise((resolve, reject) => {
        dbModelMapping[type].find({}, function (err, users) {
            if (err) {
                return reject("There was a problem in finding the users.")
            }
            return resolve(users)
        });

    })
}

helper.find = async (type, params) => {
    const id = params
    return new Promise((resolve, reject) => {
        dbModelMapping[type].findById(id, function (err, user) {
            if (err) {
                return reject("There was a problem finding the user.")
            }
            if (user) {
                return resolve(user)
            }

        })
    })
}

helper.delete = async (type, params) => {
    const id = params
    return new Promise((resolve, reject) => {
        dbModelMapping[type].findByIdAndRemove(id, function (err, user) {

            if (err) {
                return reject("There was a problem deleting the user.");
            }
            if (user) {
                return resolve("User: " + user.name + " was deleted.");
            }

        });
    })
}

helper.update = async (type, params, reqBody) => {
    const id = params
    return new Promise((resolve, reject) => {
        dbModelMapping[type].findByIdAndUpdate(id, reqBody, { new: true }, function (err, user) {
            if (err) {
                return reject("There was a problem updating the user.");
            }
            if (user) {
                return resolve(user);
            }
        });
    })
}

module.exports = helper