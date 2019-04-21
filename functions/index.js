'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

const email = functions.config().gmail.login
const pass = functions.config().gmail.pass

admin.initializeApp()

// Function to send emails
let sendEmail = function (message) {
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
    subject: '🦍🦐🐖🦍🦐🐖🦍🦐🐖🦍🦐🐖🦍🦐🐖',
    text: '!' + message,
    html: '!' + message
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
  let text = createdData.mail

  sendEmail(text)
})
