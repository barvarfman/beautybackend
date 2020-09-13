const axios = require('axios');

module.exports = {
    getCalendar,
    // getByEmail,
    // remove,
    // update,
    // add
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

// async function getByEmail(email) {
//     const collection = await dbService.getCollection('calendars')
//     try {
//         const calendar = await collection.findOne({email})
//         return calendar
//     } catch (err) {
//         console.log(`ERROR: while finding calendar ${email}`)
//         throw err;
//     }
// }

// async function remove(calendarId) {
//     const collection = await dbService.getCollection('calendars')
//     try {
//         await collection.deleteOne({"_id":ObjectId(calendarId)})
//         console.log('delete at service',calendarId);
//     } catch (err) {
//         console.log(`ERROR: cannot remove calendar ${calendarId}`)
//         throw err;
//     }
// }

// async function update(calendar) {
//     const collection = await dbService.getCollection('calendars')
//     calendar._id = ObjectId(calendar._id);

//     try {
//         await collection.replaceOne({"_id":calendar._id}, {$set : calendar})
//         return calendar
//     } catch (err) {
//         console.log(`ERROR: cannot update calendar ${calendar._id}`)
//         throw err;
//     }
// }

// async function add(calendar) {
//     const collection = await dbService.getCollection('calendars')
//     try {
//         await collection.insertOne(calendar);
//         return calendar;
//     } catch (err) {
//         console.log(`ERROR: cannot insert calendar`)
//         throw err;
//     }
// }



