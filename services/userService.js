const { User } = require('../models');

const addUserService = async (displayName, email, password, image) => {
    const users = await User.findAll();
    const emailValidation = users.some((e) => e.email === email);
    const data = await User.create(displayName, email, password, image);
    
    if (emailValidation === true) {
      return { code: 409, message: 'User already exists' };
    }
    return { code: 201, data };
}

module.exports = {
    addUserService,
}