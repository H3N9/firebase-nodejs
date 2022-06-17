const express = require('express');
const { createUser, signInPhone } = require('../controllers/userController');

const router = express.Router();

router.post('/create-user', createUser);
router.post('/sign-in-phone', signInPhone);

module.exports = {
  routers: router,
};
