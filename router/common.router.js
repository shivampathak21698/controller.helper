const express = require('express')
const router = express.Router()

const controller = require('../controller/common.controller') 


router.get('/:type', controller.getList)
router.post('/:type', controller.add)
router.get('/:type/:id', controller.find)
router.put('/:type/:id', controller.update)
router.delete('/:type/:id', controller.delete)

module.exports = router