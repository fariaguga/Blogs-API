const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const addUserService = async (displayName, email, password, image) => {
  const alreadyExists = await User.findOne({ where: { email } });

    if (alreadyExists) {
      return { code: 409, message: 'User already exists' };
    }
    
    const newUser = await User.create({ displayName, email, password, image });

    const token = jwtGenerator({ id: newUser.id, displayName });
    return { code: 201, token };
};

module.exports = {
    addUserService,
};
