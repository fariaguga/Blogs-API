const titleValidation = (req, res, next) => {
    try {
        const { title } = req.body;
  
        if (!title || title === '') {
            return res.status(400).json({ message: '"title" is required' });
        }
  
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = titleValidation;