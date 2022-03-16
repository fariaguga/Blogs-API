const { Categorie } = require('../models');

const addCategorieService = async (name) => {    
    const newCategorie = await Categorie.create({ name });
    return { code: 201, newCategorie };
};

const getCategoriesService = async () => {    
    const categories = await Categorie.findAll();

    if (!categories) {
        return { code: 409, message: 'Not catgories in db' };
      }
    return { code: 200, categories };
};

module.exports = {
    addCategorieService,
    getCategoriesService,
};