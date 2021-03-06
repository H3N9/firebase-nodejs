const firebase = require('firebase/app');
const firestore = require('firebase/firestore');
const firebaseAuth = require('firebase/auth');
const config = require('./config');

const app = firebase.initializeApp(config.firebaseConfig);
const db = firestore.getFirestore(app);

module.exports = {
  db,
  firestore,
  firebaseAuth,
};
