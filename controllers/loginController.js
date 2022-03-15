const loginService = require('../services/loginService');

const signController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { code, message, token } = await loginService.signService(email, password);
        if (message) return res.status(code).json({ message });
        return res.status(code).json({ token });
    } catch (error) {
        return console.error(error);
    }
  };

  module.exports = {
      signController,
  };  