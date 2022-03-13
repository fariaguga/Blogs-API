const addUserController = async (req, res) => {
    try {
        const { email, password, image } = req.body;
        const { code, message, data } = await UserService.addUser(email, password, image );
        if (message) return res.status(code).json({ message });
        return res.status(code).json(data);
    } catch (error) {
        return console.error(error);
    }
  };

  module.exports = {
      addUserController,
  }
  