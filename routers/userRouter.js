const express = require('express');
const { addUserController, getAllUsersController } = require('../controllers/userController');
const middlewares = require('../middlewares/index');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

const validateUser = [
    middlewares.nameValidation, 
    middlewares.emailValidation,
    middlewares.passwordValidation,
  ];

router.post('/', validateUser, addUserController);
router.get('/', auth, getAllUsersController);
module.exports = router;