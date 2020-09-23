const db = require('../connection/db');
const Schema = require('../model/schema')

const mongoose = require('mongoose')
const jobDB = mongoose.model('jobDB')


const helper = {}

helper.add = async (req, res) => {
    const email = req.body.email;
    return (email)
}

helper.getList = async (req, res) => {
    return "hi from helper"
}

module.exports = helper