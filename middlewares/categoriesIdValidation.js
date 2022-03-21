const categoriesIdValidation = (req, res, next) => {
    try {
        const { categoryIds } = req.body;
  
        if (!categoryIds || categoryIds === '') {
            return res.status(400).json({ message: '"categoryIds" is required' });
        }
  
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = categoriesIdValidation;