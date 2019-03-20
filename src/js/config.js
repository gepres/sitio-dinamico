import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyA2UBzA5az5hj4Tq3ATz3qvwAFmFr_fTMw",
  authDomain: "edfirebase-de5fc.firebaseapp.com",
  databaseURL: "https://edfirebase-de5fc.firebaseio.com",
  projectId: "edfirebase-de5fc",
  storageBucket: "edfirebase-de5fc.appspot.com",
  messagingSenderId: "306721499288"
}

const init = () => firebase.initializeApp(config)

init()
