const { createUser } = require('./userController')
const express = require('express')
const router = express.Router()

router.post('/', createUser)

module.exports = router
