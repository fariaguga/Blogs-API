const express = require('express');

const { 
  addCategorieController, 
  getCategoriesCotroller,
} = require('../controllers/categorieController');

const middlewares = require('../middlewares/index');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

const validateCategorie = [
    middlewares.nameCatVal,
  ];

router.post('/', auth, validateCategorie, addCategorieController);
router.get('/', auth, getCategoriesCotroller);

module.exports = router;