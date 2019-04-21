// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC7EJIXdCMc57qFCXy8ctkViPC6OAYzuqg',
  authDomain: 'ethan-portfolio.firebaseapp.com',
  databaseURL: 'https://ethan-portfolio.firebaseio.com',
  projectId: 'ethan-portfoliio',
  storageBucket: 'ethan-portfolio.appspot.com',
  messagingSenderId: '728491415873'
}
firebase.initializeApp(config)

// Reference message collectionn
const messagesRef = firebase.database().ref('messages')

// Function on submit contact form
const submitForm = (e) => {
  e.preventDefault()

  let name = getVal('name')
  let email = getVal('email')
  let body = getVal('message')

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }

  // Save message
  saveMessage(name, email, body)

  // Clear form
  document.getElementById('contact-form').reset()
}

// Listen for form submit
$('#contact-form').on('submit', submitForm)

// Get form values
const getVal = (id) => {
  return document.getElementById(id).value
}

// Save message to firebase
const saveMessage = (name, email, body) => {
  messagesRef.push().set({
    name: name,
    email: email,
    body: body
  })
}
