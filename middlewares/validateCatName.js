const nameCatVal = (req, res, next) => {
    try {
        const { name } = req.body;
  
        if (!name || name === '') {
            return res.status(400).json({ message: '"name" is required' });
        }
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = nameCatVal;