const express = require('express');

const { postController } = require('../controllers/postController');

const middlewares = require('../middlewares/index');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

const validate = [
    middlewares.titleValidation,
    middlewares.contentValidation,
    middlewares.categoriesIdValidation,
  ];

router.post('/', auth, validate, postController);

module.exports = router;