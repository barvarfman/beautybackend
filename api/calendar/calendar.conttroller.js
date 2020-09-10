const calendarService = require('./calendar.service')
const logger = require('../../services/logger.service')

// async function addCalendar(req, res) {
//     const calendar = req.body;
//     const addedCalendar = await calendarService.add(calendar);
//     res.json(addedCalendar);
// }

async function getCalendar(req, res) {
    console.log('controller back')
    const calendar = await calendarService.getCalendar()
    res.send(calendar)
}

async function getCalendars(req, res) {
    const calendars = await calendarService.query(req.query)
    logger.debug(calendars);
    res.send(calendars)
}

async function deleteCalendar(req, res) {
    await calendarService.remove(req.params.id)
    res.end()
}

async function updateCalendar(req, res) {
    const calendar = req.body;
    await calendarService.update(calendar)
    res.send(calendar)
}

module.exports = {
    getCalendar,
    getCalendars,
    deleteCalendar,
    updateCalendar,
    addCalendar
}