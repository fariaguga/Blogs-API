const emailValidation = (req, res, next) => {
    try {
        const { email } = req.body;
        const regex = /\S+@\S+\.\S+/;
        const regexEmail = regex.test(String(email).toLocaleLowerCase());
  
        if (!email || email === '') {
            return res.status(400).json({ message: '"email" is required' });
        }
  
        if (!regexEmail) {
            return res.status(400).json(
                { message: '"email" must be a valid email' },
            );
        } 
  
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = emailValidation;