const calendarService = require('./calendar.service')
const logger = require('../../services/logger.service')

// async function addCalendar(req, res) {
//     const calendar = req.body;
//     const addedCalendar = await calendarService.add(calendar);
//     res.json(addedCalendar);
// }

async function getCalendar(req, res) {
    const calendar = await calendarService.getCalendar()
    res.send(calendar)
}

async function addEvent(req, res) {
    const event =  await calendarService.addEvent(req.body) 
    res.send(event)
}

async function removeEvent(req, res) {
    await calendarService.removeEvent(req.params.id)
    res.end()
}

async function getEvent(req, res) {
    const phone = req.params.phone
    const event =  await calendarService.getEventByPhone(phone) 
    res.send(event)
}

// async function updateCalendar(req, res) {
//     const calendar = req.body;
//     await calendarService.update(calendar)
//     res.send(calendar)
// }

module.exports = {
    getCalendar,
<<<<<<< HEAD
    getCalendars,
    deleteCalendar,
    updateCalendar,
    // addCalendar
=======
    addEvent,
    getEvent,
    removeEvent
>>>>>>> 360e1c0f74544db64c8361dd061ca657e68b1372
}