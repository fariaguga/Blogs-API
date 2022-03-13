const express = require('express');
const { createUser } = require('../controllers/userController');
const { auth } = require('../middlewares');

const router = express.Router();

router.post('/', createUser);


module.exports = router;