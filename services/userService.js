const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const addUserService = async (displayName, email, password, image) => {
  const alreadyExists = await User.findOne({ where: { email } });

    if (alreadyExists) {
      return { code: 409, message: 'User already registered' };
    }
    
    const newUser = await User.create({ displayName, email, password, image });

    const token = jwtGenerator({ id: newUser.id, displayName });
    return { code: 201, token };
};

const getAllUsersService = async () => {
  const users = await User.findAll();

    if (!users) {
      return { code: 409, message: 'Not users in db' };
    }
    return { code: 200, users };
};

module.exports = {
    addUserService,
    getAllUsersService,
};
