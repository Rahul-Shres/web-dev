const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = async (options) => {
  try {
    if (!process.env.EMAIL || !process.env.APPPASSWORD) {
      throw new Error("Email credentials not provided");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APPPASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    const mailOptions = {
      from: "Rahul Shrestha <rahul.ussac@gmail.com>",
      to: options.email,
      subject: options.subject,
      text: "Your otp is  " + options.otp,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error to handle it where this function is called
  }
};

module.exports = sendEmail;
