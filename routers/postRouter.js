const express = require('express');

const { postController,
  getAllController,
  getByIdController,
} = require('../controllers/postController');

const middlewares = require('../middlewares/index');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

const validate = [
  middlewares.titleValidation,
  middlewares.contentValidation,
  middlewares.categoriesIdValidation,
];

router.post('/', auth, validate, postController);
router.get('/', auth, getAllController);
router.get('/:id', auth, getByIdController);

module.exports = router;