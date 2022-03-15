const express = require('express');
const { signController } = require('../controllers/loginController');
const middlewares = require('../middlewares/index');
// const { auth } = require('../middlewares');

const router = express.Router();

const validateLogin = [
    middlewares.emailValidation,
    middlewares.passwordValidation,
  ];

router.post('/', validateLogin, signController);

module.exports = router;