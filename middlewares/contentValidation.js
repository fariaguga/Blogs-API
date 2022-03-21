const contentValidation = (req, res, next) => {
    try {
        const { content } = req.body;
  
        if (!content || content === '') {
            return res.status(400).json({ message: '"content" is required' });
        }
  
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = contentValidation;