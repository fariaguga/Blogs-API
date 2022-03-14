const express = require('express');
const { addUserController } = require('../controllers/userController');
// const { auth } = require('../middlewares');

const router = express.Router();

router.post('/', addUserController);


module.exports = router;