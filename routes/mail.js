var express = require('express');
var router = express.Router();
var config = require('../configs/config');

//Use mailgun with credentials  
var mailgun = require('mailgun-js')({
    apiKey: config.mailgun.API_KEY,
    domain: config.mailgun.DOMAIN
});

router.post('/submit', function (req, res, next) {

    var data = {
        from: `${req.body.name} <${req.body.email}>`,
        to: config.mailgun.CONTACT_EMAIL,
        subject: 'Message from contact form on MF landing page',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        if (error) {
            res.sendStatus(404);
        } else {
            //should probably add some confirmation prompt
            res.redirect("/");
        }
    });

});

module.exports = router;