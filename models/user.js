const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    // field: 'id',
  },

  displayName: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'display_name',
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    // allowNull: false,
    // field: 'email',
  },

  password: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'password',
  },

  image: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'image',
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    Attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'Users',
    },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'id', as: 'Blogposts' });
  };

  return User;
};