const userService = require('../services/userService');

const addUserController = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        console.log(displayName, email, password, image);

        const { code, message, token } = await userService.addUserService(displayName ,email, password, image );
        if (message) return res.status(code).json({ message });
        return res.status(code).json({ token });
    } catch (error) {
        return console.error(error);
    }
  };

  module.exports = {
      addUserController,
  }
  