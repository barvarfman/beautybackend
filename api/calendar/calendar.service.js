const axios = require('axios');

module.exports = {
    getCalendar
}

async function getCalendar() {
    const calendarId = '413361439'
    try {
        const calendar = await axios.get(`https://api.kloudless.com/v1/accounts/${calendarId}/cal/calendars`)
        return calendar.objects[0]
    } catch (err) {
            console.log(`ERROR: cannot find calendar`)
        throw err;
    }
}
