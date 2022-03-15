const express = require('express');
const {
  addUserController,
  getAllUsersController,
  getUserByIdController,
} = require('../controllers/userController');
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
router.get('/:id', auth, getUserByIdController);
module.exports = router;