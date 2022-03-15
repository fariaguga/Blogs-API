const categorieService = require('../services/categorieService');

const addCategorieController = async (req, res) => {
    try {
        const { name } = req.body;

        const { code, message, newCategorie } = await categorieService.addCategorieService(
            name,
            );
        if (message) return res.status(code).json({ message });
        return res.status(code).json(newCategorie);
    } catch (error) {
        return console.error(error);
    }
  };
  module.exports = {
    addCategorieController,
  };