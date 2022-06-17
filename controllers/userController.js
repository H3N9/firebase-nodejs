const { async } = require('@firebase/util');
const { firestore, db, firebaseAuth } = require('../db');

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const auth = firebaseAuth.getAuth();
    firebaseAuth
      .createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        return res.send(user);
      })
      .catch((error) => res.status(400).send(error));
  } catch (error) {
    res.status(400).send(error);
  }
};

const signInPhone = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    const auth = firebaseAuth.getAuth();
    const appRecap = new firebaseAuth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log('visible', response);
        },
      },
      auth
    );
    firebaseAuth
      .signInWithPhoneNumber(auth, phoneNumber, appRecap)
      .then((confirmationResult) => {
        res.status(200).send(confirmationResult);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createUser,
  signInPhone,
};
