// src/mailer.js
const nodemailer = require("nodemailer");
require("dotenv").config();

// Configura il transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.VITE_EMAIL_USER,
    pass: process.env.VITE_EMAIL_PASS,
  },
});

// Funzione per inviare email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.VITE_EMAIL_USER,
    to: "wmorgane@live.fr",
    subject,
    text,
    html: "CIAOOOO",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email inviata:", info.response);
    return info.response;
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    throw error;
  }
};

module.exports = { sendEmail };
