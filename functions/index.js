'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

const email = functions.config().gmail.login
const pass = functions.config().gmail.pass

admin.initializeApp()

// Function to send emails
let sendEmail = function (sender, body, sEmail) {
  // Init nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass
    }
  })

  // Configure emails
  const mailOptions = {
    from: email,
    to: 'ebonsignori@gmail.com',
    subject: '🔥🦐 New Message from ethanbon.com 🦐🔥',
    text: `Name: ${sender} +++++++ Body: ${sEmail} +++++++ Email: ${body}`,
    html: `Name: ${sender} <br><br> <hr> <br><br> Body: ${sEmail} <br><br> <hr> <br><br> Email: ${body}`
  }

  // Callback status
  const getDeliveryStatus = function (error, info) {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
  }

  // Send email and return status
  transporter.sendMail(mailOptions, getDeliveryStatus)
}

exports.onDataAdded = functions.database.ref('/messages/{sessionId}').onCreate(function (snap, context) {
  const createdData = snap.val()
  let senderName = createdData.name
  let senderEmail = createdData.email
  let messageBody = createdData.body
  sendEmail(senderName, senderEmail, messageBody)
})
