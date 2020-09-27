const helper = require('../helper/common.helper')

const controller = {};


controller.add = async (req, res) => {
    try {
        data = await helper.add(req.params.type, req.body)
            res.json({
                success: true,
                data: data
            })
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
            stack: error.stack
        })
    }
    

}

controller.getList = async (req, res) => {
    data = await helper.getList(req.params.type)
    res.json({
        success: true,
        data: data
    })
};

controller.find = async (req, res) => {
    try {
        const params = await req.params.id
        data = await helper.find(req.params.type,params)
        res.json({
            success: true,
            data: data
        })
    } catch (error) {
        res.send(error)
    }
}

controller.delete = async (req, res) => {
    try {
        const params = await req.params.id
        data = await helper.delete(req.params.type, params)
        res.json({
            success: true,
            data: data
        })
    } catch (error) {
        res.send(error)
    }
}

controller.update = async (req, res) => {
    try {
        const params = await req.params.id
        var data = await helper.update(req.params.type,params, req.body)
        res.json({
            success : true,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = controller;

