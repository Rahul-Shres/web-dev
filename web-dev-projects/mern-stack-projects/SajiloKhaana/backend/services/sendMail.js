const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: process.env.EMAIL_HOST,
        // port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: "Rahul Shrestha <rahul.ussac@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;