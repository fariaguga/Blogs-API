const express = require('express');
const { addUserController } = require('../controllers/userController');
const middlewares = require('../middlewares/index');
// const { auth } = require('../middlewares');

const router = express.Router();

const validateUser = [
    middlewares.nameValidation, 
    middlewares.emailValidation,
    middlewares.passwordValidation,
  ];

router.post('/', validateUser, addUserController);

module.exports = router;