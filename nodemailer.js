var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
    user: 'abc@gmail.com',
    pass: 'xxxxxxx'
  }
});

var mailoptions = {
   from: 'abc@gmail.com',
   to: 'def@hotmail.com',
   subject: 'nodeJs mail sender',
   text: 'That was easy!'
};

transporter.sendMail(mailoptions, function (err, info) {
	if(err) {
		console.log(err);
	} else {
		console.log('Email sent: ' + info.response);
	}
});