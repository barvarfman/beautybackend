const calendarService = require('./calendar.service')

async function getCalendar(req, res) {
    const calendar = await calendarService.getCalendar()
    console.log(calendar)
    res.send(calendar)
}


module.exports = {
    getCalendar
}