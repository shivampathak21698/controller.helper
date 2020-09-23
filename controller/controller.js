const helper = require('../helper/helper')

const controller = {};


controller.add = async (req, res) => {
    let data = await helper.add()
    res.send(data)
    
} 

controller.getList = async (req, res) => {
    res.json({
        success: true,
        data: await helper.getList()
    })
};

module.exports = controller;