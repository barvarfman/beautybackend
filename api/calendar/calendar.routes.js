const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const {getCalendar} = require('./calendar.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getCalendar)
// router.put('/:id',updateCalendar)
// router.delete('/:id', deleteCalendar)
// router.post("/", addCalendar);

module.exports = router