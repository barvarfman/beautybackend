const mailService = require('../../services/SendMail')
module.exports = {
    postEmail
}

async function postEmail(email) {
  
    try {
      await mailService.SendMailP(email);
    } catch (err) {
        console.log('ERROR: cannot find treatments')
        throw err;
    }
}
