const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const signService = async (email, password) => {
  const user = await User.findOne({ where: { email } });

    if (!user) {
      return { code: 400, message: 'Invalid fields' };
    }

    if (password !== user.password) {
        return { code: 400, message: 'Invalid fields' };
      }

    const token = jwtGenerator({ id: user.id, displayName: user.displayName });
    return { code: 200, token };
};

module.exports = {
    signService,
};
