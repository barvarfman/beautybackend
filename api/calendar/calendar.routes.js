const express = require('express')
const {getCalendar} = require('./calendar.controller')
const router = express.Router()


router.get('/', getCalendar)

module.exports = router