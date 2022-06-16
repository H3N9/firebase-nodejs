const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  APIKEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

const port = 3001;
const host = 'localhost';

assert(port, 'port is required'); //not null
assert(host, 'host is required');

module.exports = {
  port,
  host,
  url: 'http://localhost:3001/',
  firebaseConfig: {
    apiKey: APIKEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
  },
};
