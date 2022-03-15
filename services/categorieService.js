const { Categorie } = require('../models');

const addCategorieService = async (name) => {    
    const newCategorie = await Categorie.create({ name });
    return { code: 201, newCategorie };
};

module.exports = {
    addCategorieService,
};
