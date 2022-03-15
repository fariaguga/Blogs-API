const express = require('express');
const { addCategorieController } = require('../controllers/categorieController');
const middlewares = require('../middlewares/index');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

const validateCategorie = [
    middlewares.nameCatVal,
  ];

router.post('/', auth, validateCategorie, addCategorieController);

module.exports = router;